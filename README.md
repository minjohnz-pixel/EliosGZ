# EliosGZ V0.3 — 中文 / English 双语界面

[线上网站](https://minjohnz-pixel.github.io/EliosGZ/) · [仓库](https://github.com/minjohnz-pixel/EliosGZ)

这是一个**无需服务器、可在 Windows 上双击 `index.html` 预览**的 GitHub Pages 静态网站。

## 重要：两套语言不是一回事

- **界面语言**：顶部的 `中文 / EN` 切换全站导航、首页、按钮、提示、搜索和关于页面。首次访问默认为中文；再次访问记住读者的选择。
- **作品语言**：每篇小说、剧本、游戏介绍、随笔可以是仅中文、仅英文或中英双版本。
- 网站切换成英文 **不表示中文作品已经翻译**。英文版不存在时，仍显示中文原文，并以英文明确说明。反之亦然。
- 同一作品具有中英文两个经确认的文本版本时，文章阅读页单独出现 `中文 / EN` 选择，不必改变全站界面语言。
- 中文和英文版本可分别改编，不必逐字对应；请确保署名、版本状态准确。

## 电脑上预览

解压全部文件到同一个文件夹，**双击 `index.html`**。顶端切换 `中文 / EN`；文章列表和三个演示页面可以测试双语行为。

当前三篇是演示文章而非正式作品。其中一篇演示随笔具有两种语言；另两篇只有中文。剧本、游戏、作品档案栏目不自动公开任何内部项目资料。

## 修改作品——主要编辑 `content.js`

老版本的文章数据依然可用；如果没有 `language` 字段，默认中文原文。

### 只有中文（无需英文）

```js
{
  slug: "my-story", category: "fiction", date: "2026-10-25",
  language: "zh", title: "故事", summary: "简介",
  paragraphs: ["第一段。", "第二段。"]
}
```

### 有英文版（译文或英语改编稿经过确认）

```js
{
  slug: "my-story", category: "fiction", date: "2026-10-25",
  language: "zh", title: "故事", summary: "简介",
  paragraphs: ["第一段。", "第二段。"],
  translations: { en: {
    title: "A Story", summary: "A short description.",
    paragraphs: ["First paragraph.", "Second paragraph."]
  }}
}
```

### 英文原文（没有中文版）

```js
{
  slug: "english-original", category: "essay", date: "2026-10-25",
  language: "en", title: "English Original", summary: "Description.",
  paragraphs: ["An essay written in English."]
}
```

支持 `fiction`（小说）, `script`（剧本）, `game`（游戏）, `essay`（随笔）, `thought`（思想）。`slug` 不得重复，建议只使用英文小写字母、数字和短横线。文本中的引号、反斜杠应遵守 JavaScript 字符串的转义规则。

**游戏栏目当前只容纳说明文字。** 真实游戏应该将经过批准的玩家版本部署到独立子目录，内部判定资料和设计文档不应随游戏公开。

## 上传现有 GitHub 仓库（只更新文件，不新建仓库）

1. 打开 `https://github.com/minjohnz-pixel/EliosGZ`。
2. 编辑或覆盖仓库根目录现有文件：`index.html`、`site.js`、`styles.css`、`content.js`、`README.md`。
3. 保留 `.nojekyll`，不用重复创建。
4. 在仓库根目录确认 `index.html`；GitHub Pages 继续从 `main / (root)` 发布。
5. 保存后等待 GitHub Pages 部署，再刷新网站（必要时 Ctrl+F5）。

注意：在网页上**不能保证直接用同名文件拖拽上传就可以覆盖原文件**；如遇同名冲突，请进入具体文件，点击铅笔图标编辑，将本地文件内容全部替换并提交。更建议使用 GitHub Desktop，一次更新五个文件并提交。

## 公开规则

- 不把内部项目总控、未发表手稿、未审批翻译、密室谜底或游戏内部开发文件复制到公开仓库。
- 目前演示内容只有样例功能，不代表作品已经正式发布。
- 如需独立英文网址、站内语言固定链接或游戏内双语，再做后续版本。

**版本：V0.3 — 2026-10-25**

---

## English quick start

Extract all files, then open `index.html` locally. The `中文 / EN` control switches the interface language; original work texts remain in their actual available languages. Edit `content.js` to add approved works or optional editions. For the existing GitHub Pages site, update files in the repository root and keep GitHub Pages configured to deploy from `main / (root)`.
