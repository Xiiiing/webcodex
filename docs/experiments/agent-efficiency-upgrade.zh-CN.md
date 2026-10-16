# Agent 效率配对证据

[English](agent-efficiency-upgrade.md)

本流程为 [Issue #1159](https://github.com/yyjeqhc/webcodex/issues/1159) 收集当前源码证据。
本文没有真实模型测量结果，也没有认定生产环境存在低效。收集器复用
`agent_loop_benchmark` 的样本生命周期、夹具判定器和运行时门禁，以及
`agent_loop_report` 的比较逻辑。未使用可选效率身份字段的既有报告仍然可用。

## 运行相同的三个任务

检出待测源码的精确 HEAD 提交。收集器从该提交读取用例清单，为每个样本创建新的
分离工作树，固定运行 `readonly_review`、`guarded_multi_file_edit` 和
`long_validation_handoff`。默认每个任务三对，共 18 个样本，依次交替 Direct →
Host Code Mode 与 Host Code Mode → Direct。配对次数限制为 1–10；每个驱动沿用
30 分钟的进程组超时限制。工作树、回执和注解位于同一个受控临时目录，成功、失败
或初始化异常时均清理。

调用者须提供真实的在线 ChatGPT Host 驱动。它应为每个工作区建立新的 ChatGPT
任务或会话，提交用例提示，并保留该任务实际的 WebCodex 审计证据。Direct 直接
调用获准的 WebCodex 工具。Host Code Mode 通过 Host 的 JavaScript 编排相同工具，
遵守原有权限和 Job 生命周期；不能用 WebCodex 嵌套 `execute_*_code_mode` 代替 Host
通道。Job 后续操作使用外层 Job 工具。脚本化 MCP 驱动或模拟模型只能验证收集器，
不能充当真实模型证据。

开始前，在外部固定模型与配置记录，包括实际模型标识、Host 版本、推理设置、任务
指令、工具暴露、权限配置及相关 Server/Runner 构建身份。对稳定序列化后的记录计算
SHA-256，传入精确的小写 64 位十六进制摘要，并与实验证据一同保存安全的记录。
摘要与驱动声明都不能独立证明实际运行的模型。公开记录不能包含凭据、私密指令、
载荷或私密推理。驱动必须根据实际配置检查并填写声明，不能直接照抄期望值。

```sh
python3 scripts/agent_efficiency_benchmark.py \
  --repo . --base-revision "$(git rev-parse HEAD)" \
  --driver-command '/absolute/path/to/live-chatgpt-driver --pinned-config /private/config.json' \
  --model-config-digest '<固定模型和配置记录的 64 位 SHA-256 摘要>' \
  --pairs 3 --output /private/evidence/efficiency.json --strict
```

驱动接收既有 `WEBCODEX_BENCH_*` 环境契约：工作区、用例 ID、提示、variant、surface、
精确基准提交、用例指纹和回执路径。它应写入既有的有界结果回执，包括状态、选定的
审计数据库与工作流会话、正确性与验证结论，以及可选的修复注解。此外必须包含以下
精确的 `efficiency_attestation` 字段（以下为占位值）：

```json
{
  "efficiency_attestation": {
    "model_config_digest": "<固定的 64 位 SHA-256 摘要>",
    "base_revision": "<精确的 40 位提交>",
    "case_fingerprint": "<WEBCODEX_BENCH_CASE_FINGERPRINT>",
    "variant": "host_code_mode",
    "surface": "host_code_mode"
  }
}
```

Direct 使用 `variant=direct,surface=direct`。字段缺失、多余或不匹配都会使样本失败，
且不会回显意外的回执值。回执必须是普通文件，上限 64 KiB。不能写入私密模型文本、
原始工具参数或载荷。输出包含安全的聚合摘要，不包含原始回执或驱动标准输出与错误。

`--experimental-nested` 添加独立的 WebCodex 嵌套 Code Mode 比较组，并为其单独运行
新的 Direct 对照（三对时共 36 个样本）。嵌套 surface 来自固定用例定义，不替换或混合
默认 Host 结果。整个实验须保持相同的模型和配置摘要；配置发生变化时另开实验。

## 自由工具选型回归

第二阶段依赖 [PR #1162](https://github.com/yyjeqhc/webcodex/pull/1162) 的通用运行时
证据验收工作。固定三任务、每任务三对的效率套件之外，默认 `tool_selection` 实验运行
四个有界只读场景：`selection_single_read`、`selection_batch_read`、
`selection_cross_tool_review` 和 `selection_compound_source_context`。新增场景要求模型
定位从文本匹配生成源码上下文读取的实现，依据当前源码及测试解释重叠合并、读取数量
限制、字节预算回退与零匹配行为，并注明出处。提示不指定工具或调用顺序。现有规范
复合工具为 `search_file_context`；分别搜索和读取同样允许，返回上下文充分时无需再次读取。

```sh
python3 scripts/agent_loop_benchmark.py \
  --experiment tool_selection --repo . --base-revision "$(git rev-parse HEAD)" \
  --driver '/absolute/path/to/live-chatgpt-selection-driver' \
  --samples 3 --output /private/evidence/selection.json --strict
```

运行前须将清单记录在精确待测提交中。上述选型实验为四用例 × 三次重复，不强制配对
通道；效率收集器仍为三任务 × 三对 × 两通道。修复测试与 Session 恢复选型场景仍需
显式选择。完整协议见[选型实验说明](agent-loop-baseline.md#free-tool-selection-experiment)。

四个场景均须保留实际最终答案，并对照待测源码或夹具值独立核验；仓库调查还需独立
核验 Git 状态。文件判定器只检查夹具适用性。调用者提供外部正确性结论：驱动声明
pass、规范调用数或最终夹具本身均不能证明答案正确。收集器没有自动语义答案验证器。
外部正确性缺失时保持 partial，不能严格通过；规范 Audit 元数据缺失同样不能严格通过，
不可用调用数保持 null。单次复合调用与分别搜索、读取均可满足选型运行时契约，但
调用准入检查不证明答案正确或工具选择最优。已有重叠、字节预算与零匹配运行时测试
以及模拟 Audit 回归夹具仅验证契约，不是真实模型行为。本文不声称新增场景已取得
在线测量结果或指引改进。

## 解读证据

严格模式拒绝缺失的用例、组、配对或通道样本，非 pass 状态，缺失或不匹配的身份声明，
失败的夹具判定器，未获证明的运行时与用例契约，以及源码、用例或正确性不可比较的
配对。它会重新计算验收结论，不信任存储的成功标志或样本计数。严格通过不要求所有
可选指标都有数据，也不证明 Host 单元分组或独立验证模型身份。

每个样本与合格配对报告总耗时、WebCodex 外层调用数、序列化工具结果字节数、修复
轮数、外层 `observe_jobs` 调用数与立即 observe 的调度元数据。缺失测量保持 null，
配对分布保留缺失与观测计数。收集器耗时包含 Host 驱动编排；外层调用不是模型轮数；
结果字节数不是完整网络流量；立即 observe 不证明多余 observe。差值是候选减 Direct，
p50/p95 为描述性的最近秩统计，不是置信区间或提速结论。

热点候选依次根据观测到的参数或工具选择修复、同类串行 Window 调用，以及失败已
交付后仍发生的显式 observe 排序。串行代理不能证明不必要的微调用。当前安全摘要不能
证明相同内容被重复读取，因此不会虚构重复读取结论。失败交付后的 observe 也须进一步检查必要性，
才能提出改进建议。调用次数低不能单独证明成功或效率。提出具体工具契约或指引
改进前，先检查真实候选证据，再在修改后的当前提交重复相同的三对实验，保持正确性
和运行时门禁。没有真实观测时，本阶段不修改生产指引或运行时。单元夹具仅验证收集与
拒绝行为。
