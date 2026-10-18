import { ActionIcon, ColorSwatch, Group, Menu, Popover, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import { Check, Languages, Monitor, MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { RUNTIME_LANGUAGES, translate, type RuntimeLanguage } from "../../../runtime_i18n.js";
import type { AppearancePreference } from "../../../runtime_storage.js";
import { ACCENT_PRESETS, normalizeAccent } from "../../../ui/accent.js";

type Props = {
  accent: string;
  appearance: AppearancePreference;
  language: RuntimeLanguage;
  onAccentChange: (color: string) => void;
  onAppearanceCycle: () => void;
  onLanguageChange: (language: RuntimeLanguage) => void;
};

/** The same three library-owned controls at the rail, mobile entry and gate. */
export function RuntimePreferences({ accent, appearance, language, onAccentChange, onAppearanceCycle, onLanguageChange }: Props) {
  const t = (value: string) => translate(value, language);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [customColor, setCustomColor] = useState(accent);
  useEffect(() => setCustomColor(accent), [accent]);
  const appearanceLabel = `${t("Appearance")} · ${t(appearance === "system" ? "System" : appearance === "light" ? "Light" : "Dark")}`;
  const languageLabel = RUNTIME_LANGUAGES.find(option => option.value === language)!.label;

  return <div className="runtime-preference-buttons" role="group" aria-label={t("Preferences")}>
    <Popover opened={paletteOpen} onChange={setPaletteOpen} width={244} position="top-start" offset={8}
      withinPortal trapFocus returnFocus zIndex={1100} shadow="md" radius="md">
      <Popover.Target>
        <Tooltip label={t("Accent color")} openDelay={400} disabled={paletteOpen}>
          <ActionIcon className="runtime-preference-button" variant="subtle" color="gray" size={36} radius="md"
            aria-label={t("Accent color")} onClick={() => setPaletteOpen(value => !value)}>
            <ColorSwatch color={accent} size={16} withShadow={false} aria-hidden="true" />
          </ActionIcon>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown className="runtime-preference-popover" aria-label={t("Accent color")}>
        <Stack gap="md">
          <Text size="sm" fw={600}>{t("Accent color")}</Text>
          <Group gap="sm" justify="space-between">
            {ACCENT_PRESETS.map(preset => <Tooltip key={preset.id} label={t(preset.label)}>
              <ColorSwatch component="button" type="button" color={preset.color} size={32}
                aria-label={t(preset.label)} aria-pressed={accent.toLowerCase() === preset.color}
                data-autofocus={accent.toLowerCase() === preset.color || undefined}
                onClick={() => { onAccentChange(preset.color); setPaletteOpen(false); }}>
                {accent.toLowerCase() === preset.color && <Check size={17} color="white" aria-hidden="true" />}
              </ColorSwatch>
            </Tooltip>)}
          </Group>
          <TextInput size="xs" label={t("Custom color")} value={customColor} maxLength={7} placeholder="#2563eb"
            onChange={event => {
              const value = event.currentTarget.value;
              setCustomColor(value);
              const normalized = normalizeAccent(value);
              if (normalized) onAccentChange(normalized);
            }} onBlur={() => setCustomColor(accent)} />
        </Stack>
      </Popover.Dropdown>
    </Popover>
    <Tooltip label={appearanceLabel} openDelay={400}>
      <ActionIcon className="runtime-preference-button" variant="subtle" color="gray" size={36} radius="md"
        aria-label={t("Appearance")} aria-description={appearanceLabel} onClick={onAppearanceCycle}>
        {appearance === "system" ? <Monitor size={18} /> : appearance === "dark" ? <MoonStar size={18} /> : <Sun size={18} />}
      </ActionIcon>
    </Tooltip>
    <Menu position="top-end" offset={8} width={184} withinPortal zIndex={1100} shadow="md" radius="md">
      <Menu.Target>
        <Tooltip label={`${t("Language")} · ${languageLabel}`} openDelay={400}>
          <ActionIcon className="runtime-preference-button" variant="subtle" color="gray" size={36} radius="md" aria-label={t("Language")}>
            <Languages size={18} />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown className="runtime-preference-popover">
        <Menu.Label>{t("Language")}</Menu.Label>
        <Menu.RadioGroup value={language} onChange={value => onLanguageChange(value as RuntimeLanguage)}>
          {RUNTIME_LANGUAGES.map(option => <Menu.RadioItem key={option.value} value={option.value} closeMenuOnClick>
            {option.label}
          </Menu.RadioItem>)}
        </Menu.RadioGroup>
      </Menu.Dropdown>
    </Menu>
  </div>;
}
