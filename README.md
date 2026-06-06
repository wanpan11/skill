# Skill 集合仓库

本仓库用于维护和发布 Codex/agents skills。这里存放的是 skill 源码和模板资源，不是这些 skill 的目标使用项目。

## 包含内容

- `ai-coding-guide/`：用于初始化或刷新目标项目 `AGENTS.md` 的 skill。
- `ai-coding-guide/SKILL.md`：skill 使用说明。
- `ai-coding-guide/assets/AGENTS.md`：可复制到其他项目的中文 `AGENTS.md` 模板。
- `ai-coding-guide/assets/AGENTS_ROUTE.md`：可复制到其他项目的中文路由/layout 专项说明模板。
- `ai-coding-guide/scripts/check_templates.mjs`：skill 内置模板完整性检查脚本。
- `ai-coding-guide/agents/openai.yaml`：Codex UI 元数据。

## 安装 skill

将需要使用的 skill 复制到 agents 可发现的 skills 目录，例如：

```bash
cp -R ai-coding-guide /Users/wanpan/.agents/skills/
```

## 在其他项目中使用

进入目标项目后使用：

```text
使用 $ai-coding-guide，为当前项目初始化或刷新 AGENTS.md。
```

如果项目有复杂路由、layout 或菜单结构，也可以让它同步初始化 `AGENTS_ROUTE.md`；没有这些结构时不要生成该文件。

不要在本仓库根目录运行该 skill 来生成项目说明；本仓库只维护 skill 模板和发布文件。

## 发包前检查

```bash
node ai-coding-guide/scripts/check_templates.mjs
npm run pack:dry-run
```

如果要公开发布，请先确认 `package.json` 中的 `name`、`version` 和 `license` 符合你的发布目标。
