import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const skillRoot = path.resolve(scriptDir, '..')
const agentsTemplate = fs.readFileSync(path.join(skillRoot, 'assets/AGENTS.md'), 'utf8')
const routeTemplate = fs.readFileSync(path.join(skillRoot, 'assets/AGENTS_ROUTE.md'), 'utf8')
const skill = fs.readFileSync(path.join(skillRoot, 'SKILL.md'), 'utf8')

const errors = []

function requireText(name, content, expected) {
  if (!content.includes(expected)) {
    errors.push(`${name} 缺少: ${expected}`)
  }
}

function rejectText(name, content, forbidden) {
  if (content.includes(forbidden)) {
    errors.push(`${name} 不应包含: ${forbidden}`)
  }
}

const requiredKarpathyTexts = [
  '## Karpathy 编码指南',
  '### 1. 编码前思考',
  '### 2. 简洁优先',
  '### 3. 精准修改',
  '### 4. 目标驱动执行',
  '| 不要这样做 | 转化为 |',
  '| "添加验证" | "为无效输入编写测试，然后让它们通过" |',
  '| "修复 bug" | "编写重现 bug 的测试，然后让它通过" |',
  '| "重构 X" | "确保重构前后测试都能通过" |',
  '1. [步骤] -> 验证: [检查]',
  '2. [步骤] -> 验证: [检查]',
  '3. [步骤] -> 验证: [检查]',
]

for (const expected of requiredKarpathyTexts) {
  requireText('AGENTS.md', agentsTemplate, expected)
}

const forbiddenFixedTechTexts = [
  // 这是防止模板写死目标项目实现的强约束；只加入会把技术事实烙进通用模板的词。
  '技术栈',
  '技术选型',
  'React',
  'Vue',
  'Node',
  'Vite',
  'Svelte',
  'Angular',
  'Next',
  'Nuxt',
  'Router',
  'router-view',
  '$route',
  'fullPath',
]

for (const forbidden of forbiddenFixedTechTexts) {
  rejectText('AGENTS.md', agentsTemplate, forbidden)
  rejectText('AGENTS_ROUTE.md', routeTemplate, forbidden)
  rejectText('SKILL.md', skill, forbidden)
}

requireText('SKILL.md', skill, '没有路由、layout、导航菜单、嵌套路由或页面壳层时，不生成 `AGENTS_ROUTE.md`。')
requireText('AGENTS.md', agentsTemplate, '仅当项目存在路由、layout、页面壳层或菜单结构时，才保留 `AGENTS_ROUTE.md` 参考。')

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log('templates valid')
