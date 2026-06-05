# AI Coding Guide Skill

用于初始化或刷新项目级 `AGENTS.md` 的 Codex skill。

## 包含内容

- `ai-coding-guide/SKILL.md`：skill 使用说明。
- `ai-coding-guide/assets/AGENTS.md`：可复制到其他项目的中文 `AGENTS.md` 模板。
- `ai-coding-guide/assets/AGENTS_ROUTE.md`：可复制到其他项目的中文路由/layout 专项说明模板。
- `ai-coding-guide/agents/openai.yaml`：Codex UI 元数据。

## 使用方式

将 `ai-coding-guide/` 放到 Codex 可发现的 skills 目录，例如：

```bash
cp -R ai-coding-guide "${CODEX_HOME:-$HOME/.codex}/skills/"
```

在目标项目中使用：

```text
使用 $ai-coding-guide，为当前项目初始化或刷新 AGENTS.md。
```

如果项目有复杂路由、layout 或菜单结构，也可以让它同步初始化 `AGENTS_ROUTE.md`。

## 发包前检查

```bash
npm run pack:dry-run
```

如果要公开发布，请先确认 `package.json` 中的 `name`、`version` 和 `license` 符合你的发布目标。
