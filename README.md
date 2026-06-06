# @wanp/skills

个人 Codex/agents skills 集合仓库。

这里存放的是可安装的 skill 源码、模板资源和发布配置，不是这些 skill 的目标使用项目。仓库使用标准 `skills/<skill-name>/` 目录结构，方便通过 `npx skills add` 从仓库级别发现和安装。

## Skills

### `frontend-project-init`

前端项目初始化 skill，用于在目标项目中初始化或刷新 `AGENTS.md`。它会读取目标项目的真实文件后填充项目事实，并保留通用 AI 编码规范。

当目标项目存在复杂路由、layout、导航菜单、嵌套路由或页面壳层时，也可以按需生成 `AGENTS_ROUTE.md` 专项说明；没有这些结构时不生成该文件。

主要文件：

- `skills/frontend-project-init/SKILL.md`：skill 使用说明。
- `skills/frontend-project-init/assets/AGENTS.md`：中文 `AGENTS.md` 模板。
- `skills/frontend-project-init/assets/AGENTS_ROUTE.md`：路由/layout 专项说明模板。
- `skills/frontend-project-init/scripts/check_templates.mjs`：模板完整性检查脚本。
- `skills/frontend-project-init/agents/openai.yaml`：Codex UI 元数据。

## 安装

从 GitHub 仓库安装指定 skill：

```bash
npx skills add wanp/skills --skill frontend-project-init
```

从本地仓库安装：

```bash
npx skills add ./skills/frontend-project-init
```

本地开发时也可以直接复制到 agents 可发现目录：

```bash
npm run sync:local
```

## 使用

进入目标项目后使用：

```text
使用 $frontend-project-init，为当前前端项目初始化或刷新 AGENTS.md。
```

如果项目有复杂路由、layout 或菜单结构，也可以让它同步初始化 `AGENTS_ROUTE.md`；没有这些结构时不要生成该文件。

不要在本仓库根目录运行该 skill 来生成项目说明。本仓库只维护 skill 模板和发布文件。

## 目录结构

```text
skills/
  frontend-project-init/
    SKILL.md
    agents/openai.yaml
    assets/
      AGENTS.md
      AGENTS_ROUTE.md
    scripts/
      check_templates.mjs
```

## 维护检查

```bash
node skills/frontend-project-init/scripts/check_templates.mjs
npm run sync:local
npm run pack:dry-run
```

`npm run sync:local` 会把 `skills/frontend-project-init` 同步到 `/Users/wanpan/.agents/skills/frontend-project-init`。`npm run pack:dry-run` 会确认 npm 包内容包含 `skills/` 目录。公开发布前请确认 `package.json` 中的 `name`、`version` 和 `license` 符合发布目标。
