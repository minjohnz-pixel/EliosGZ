# 个人文学与思想网站｜GitHub Pages 起步包

这是一个**可在 Windows 电脑上直接打开、无需购买域名、无需安装程序**的静态网站初版。

## 1. 先在电脑上打开

1. 将压缩包完整解压到一个文件夹（不要只把 index.html 单独拿出来）。
2. 双击 `index.html`，浏览器会显示网站首页。
3. 点击首页、小说、随笔、思想、关于，尝试站内搜索和深浅模式切换。

## 2. 如何修改标题、文章

使用 Windows 记事本或 VS Code 打开 `content.js`。
- 顶部 `SITE_CONFIG` 是网站标题、简介、关于页面。
- `SITE_POSTS` 是文章列表。
- 每一篇文章都有 `slug`（英文/数字短标识）、`category`、`title`、`summary`、`date` 和 `paragraphs`。
- 把 `paragraphs` 中每一个字符串写成一个段落；复制整篇文章对象，即可增加更多文章。
- `category` 只能用 `fiction`（小说）、`essay`（随笔）、`thought`（思想）。
- `slug` 必须唯一，建议只用英文小写字母、数字和连字符。
- 如果文字中有英文双引号 `"` 或反斜杠 `\`，要按 JavaScript 字符串规则转义：`\"`、`\\`。
- 保存后，刷新浏览器即可。

**当前三篇都是演示文字，不是你的正式作品。公开上线前一定要替换或删除。**

## 3. 从电脑上传并发布到 GitHub Pages（不用 Git 命令）

1. 登录 GitHub：https://github.com
2. 右上角 `+` → `New repository`。
3. 如需建立 GitHub 个人主页，仓库名称必须填：`你的GitHub用户名.github.io`。例如用户名是 `octocat`，仓库名就是 `octocat.github.io`。如果只是某个项目网站，也可以使用别的仓库名，网址会包含仓库名称。
4. 选择 `Public`（GitHub Free 的 Pages 发布要求仓库公开），创建仓库。
5. 进入仓库 → `Add file` → `Upload files`，**上传本起步包内所有文件**，包括 `index.html`、`styles.css`、`site.js`、`content.js`、`.nojekyll` 和 `README.md`。注意不要把整个外层文件夹上传成子目录；`index.html` 应在仓库根目录。某些系统隐藏点开头的文件，`.nojekyll` 不可见时可暂时略过。
6. 仓库 `Settings` → `Pages`。
7. 在 `Build and deployment` → `Source` 选择 `Deploy from a branch`。
8. 选择 `main` → `/(root)` → `Save`。
9. GitHub Pages 完成部署后，打开 `https://你的GitHub用户名.github.io/`（个人主页仓库），或者 `https://你的GitHub用户名.github.io/仓库名/`（项目网站）。

官方说明：
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 4. 推荐的资料划分（重要）

公开的 GitHub 仓库：**只放愿意公开给读者的内容**。
个人电脑另外保留：
- 小说正文原稿、未发表版本；
- 内部协作说明、人物档案和版本历史；
- 备份和其他不适合公开的资料。

GitHub Pages 不是私密工作空间，也不是存放账号口令的地方。不要上传个人隐私、密码、访问令牌、未经确认可以公开的文档。

## 5. 后续升级路线

- 第一步：替换三篇演示文章，确认网站名称与署名。
- 第二步：新增小说卷/章、文章目录和系列页。
- 第三步：建立适合多平台 AI 协作的网站内容格式，避免把内部草稿误发布。
- 第四步：如文章规模变大，再评估 Jekyll 或其他静态网站生成器。

## 6. 文件清单

- `index.html`：首页与网站结构
- `styles.css`：版式、手机适配、深浅主题
- `content.js`：文章、网站设置（主要编辑这里）
- `site.js`：栏目、文章页、站内搜索、主题切换
- `.nojekyll`：告诉 GitHub Pages 不走 Jekyll 特殊处理
- `README.md`：本使用说明

**版本：V0.1（2026-10-25）**。网站零外部依赖，静态托管即可使用。
