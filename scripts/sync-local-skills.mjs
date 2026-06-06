import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const skillName = 'frontend-project-init'
const source = path.join(repoRoot, 'skills', skillName)
const targetRoot = '/Users/wanpan/.agents/skills'
const target = path.join(targetRoot, skillName)

await fs.access(path.join(source, 'SKILL.md'))
await fs.mkdir(targetRoot, { recursive: true })
await fs.rm(target, { recursive: true, force: true })
await fs.cp(source, target, { recursive: true })

console.log(`Synced ${source} -> ${target}`)
