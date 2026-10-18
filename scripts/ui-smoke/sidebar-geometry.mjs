import assert from 'node:assert/strict';
import fs from 'node:fs';
import { chromium } from 'playwright';
import { startFixtureServer } from './server.mjs';

// Geometry regression for the reported sidebar screenshots. Fixture data only.
const output = new URL('../../artifacts/web-soft-surfaces/sidebar/', import.meta.url);
fs.mkdirSync(output, { recursive: true });
const fixture = await startFixtureServer();
const browser = await chromium.launch({ headless: true });
const report = { fixture: true, nativeBackend: false, checks: [], errors: [] };
async function inspect(page, width, theme, language, collapsed = false) {
  if (width <= 700) await page.locator('.mobile-app-bar button').click();
  const root = width <= 700 ? '.mobile-preferences' : '.nav-utilities';
  await page.locator(`${root} select`).selectOption(language);
  await page.waitForFunction(language => document.documentElement.lang === language, language);
  assert.equal((await page.locator(`${root} .accent-picker summary`).innerText()).trim(), width > 700 && (width <= 1100 || collapsed) ? '' : language === 'zh-CN' ? '主题色' : 'Accent color');
  const geometry = await page.locator(root).evaluate(element => {
    const box = node => {
      const b = node.getBoundingClientRect();
      return { x: b.x, y: b.y, width: b.width, height: b.height, right: b.right, bottom: b.bottom, cx: b.x + b.width / 2, cy: b.y + b.height / 2 };
    };
    return [...element.children].map(child => {
      const control = child.tagName === 'DETAILS' ? child.querySelector('summary') : child;
      const icon = control.querySelector('svg, .accent-current');
      const label = control.querySelector('select, span');
      return { ...box(control), icon: box(icon), label: label ? box(label) : null };
    });
  });
  assert.equal(geometry.length, 4);
  for (let i = 0; i < geometry.length; i++) {
    const control = geometry[i];
    assert(control.height >= 40, JSON.stringify(control));
    assert(Math.abs(control.x - geometry[0].x) <= 1 && Math.abs(control.width - geometry[0].width) <= 1, 'preferences share the same left/right edges');
    assert(Math.abs(control.icon.cx - geometry[0].icon.cx) <= 1, 'preference icons share one axis');
    assert(Math.abs(control.icon.cy - control.cy) <= 1, 'preference icons are vertically centered');
    if (i) assert(control.y >= geometry[i - 1].bottom + 2, 'controls are separate rows with consistent gaps');
    assert(control.right <= width + 1, 'preference control stays inside viewport');
  }
  if (width > 700) {
    const nav = await page.locator('.app-nav .nav-icon').first().boundingBox();
    assert(Math.abs(nav.x + nav.width / 2 - geometry[0].icon.cx) <= 1, 'navigation and preferences use the same icon axis');
    if (width > 1100 && !collapsed) {
      const label = await page.locator('.app-nav .nav-label').first().boundingBox();
      for (const item of geometry) assert(Math.abs(item.label.x - label.x) <= 1, 'navigation/preference labels align');
    }
    if (width === 1440 && !collapsed) await page.locator(root).screenshot({ path: new URL(`preferences-${width}-${theme}-${language}.png`, output).pathname, animations: 'disabled' });
    await page.locator('.app-nav').screenshot({ path: new URL(`sidebar-${width}-${theme}-${language}${collapsed ? '-collapsed' : ''}.png`, output).pathname, animations: 'disabled' });
  } else {
    await page.locator('.mobile-preferences').screenshot({ path: new URL(`preferences-${width}-${theme}-${language}.png`, output).pathname, animations: 'disabled' });
    await page.keyboard.press('Escape');
  }
  assert.equal(await page.locator('.ui-selection-rail').count(), 0, 'primary selection has no leftover decorative rail');
  const selected = page.locator('.window-work-row[aria-current="true"]');
  assert.equal(await selected.count(), 1);
  const row = await selected.evaluate(element => {
    const style = getComputedStyle(element);
    const copy = element.querySelector('.window-work-row-main');
    return { shadow: style.boxShadow, border: style.borderTopWidth, background: style.backgroundColor,
      contentBackground: getComputedStyle(document.documentElement).getPropertyValue('--ui-content').trim(),
      metadataLines: copy.querySelectorAll(':scope > small').length,
      width: element.clientWidth, contentWidth: element.scrollWidth };
  });
  assert.equal(row.shadow, 'none', 'selected Window has no inset blue edge');
  assert.equal(row.border, '1px', 'selected Window uses a complete outline');
  assert.notEqual(row.background, 'rgba(0, 0, 0, 0)');
  assert.equal(row.metadataLines, 2, 'Window row has title and two supporting lines');
  assert(row.contentWidth <= row.width + 1, 'long row text stays contained');
  assert(await page.evaluate(() => Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) <= innerWidth + 1));
  await selected.screenshot({ path: new URL(`selection-${width}-${theme}-${language}${collapsed ? '-collapsed' : ''}.png`, output).pathname, animations: 'disabled' });
  report.checks.push({ width, theme, language, collapsed, preferenceAlignment: true, selectionOutline: true, compactMetadata: true, overflow: false });
}
try {
  for (const width of [1440, 1280, 1024, 768, 390]) {
    for (const theme of ['light', 'dark']) {
      for (const language of ['en', 'zh-CN']) {
        const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
        page.on('pageerror', error => report.errors.push(error.message));
        await page.addInitScript(theme => localStorage.setItem('webcodex.runtime.appearance.v1', theme), theme);
        await page.goto(fixture.url + '/runtime/');
        await page.getByTestId('work-window-row-' + '4700'.repeat(16)).waitFor();
        await inspect(page, width, theme, language);
        if (width === 1440) {
          await page.locator('.sidebar-collapse').click();
          await inspect(page, width, theme, language, true);
          // Compact language controls must remain reachable from the keyboard.
          await page.keyboard.press('Tab');
          await page.locator('.nav-utilities select').focus();
          assert(await page.locator('.runtime-language-control').evaluate(element => getComputedStyle(element).outlineStyle !== 'none'));
        }
        await page.close();
      }
    }
  }
  assert.deepEqual(report.errors, []);
  fs.writeFileSync(new URL('report.json', output), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ checks: report.checks.length, errors: report.errors }));
} finally {
  await browser.close();
  await new Promise(resolve => fixture.server.close(resolve));
}
