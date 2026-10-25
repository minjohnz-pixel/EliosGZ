/* 不依赖服务器、框架或第三方脚本：双击 index.html 即可使用。 */
(() => {
  "use strict";
  const CONFIG = window.SITE_CONFIG || {};
  const POSTS = Array.isArray(window.SITE_POSTS) ? window.SITE_POSTS : [];
  const categories = {
    fiction: { name: "小说", english: "FICTION" },
    script: { name: "剧本", english: "SCRIPTS" },
    game: { name: "游戏", english: "GAMES" },
    essay: { name: "随笔", english: "ESSAYS" },
    thought: { name: "思想", english: "THOUGHTS" }
  };
  const view = document.getElementById("view");
  const themeButton = document.getElementById("theme-switch");

  // 所有作者提供的文本默认按普通文本显示，避免作为 HTML 执行。
  const esc = (x) => String(x ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[ch]);
  const postHref = (p) => `#/article/${encodeURIComponent(p.slug)}`;
  const card = (p) => `
    <article class="post-card">
      <a class="card-hit" href="${postHref(p)}" aria-label="阅读${esc(p.title)}">
        <div class="card-top"><span class="category-name">${esc(categories[p.category]?.name || "笔记")}</span><span>${esc(p.date)}</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary || "")}</p>
        <div class="card-bottom"><span>${esc(p.label || "文章")}</span><span class="arrow-mark" aria-hidden="true">↗</span></div>
      </a>
    </article>`;
  const empty = `<div class="empty-state">栏目已经建立，暂无确认可公开的作品。</div>`;

  function setActive(active) {
    document.querySelectorAll("[data-nav]").forEach(el => {
      if (el.dataset.nav === active) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    });
  }
  function renderHome(category = "all") {
    const selected = category === "all" ? POSTS : POSTS.filter(p => p.category === category);
    const descriptor = categories[category];
    const title = descriptor ? descriptor.name : "最新文字";
    const small = descriptor ? descriptor.english : "RECENT WRITING";
    const sorted = [...selected].sort((a,b)=> String(b.date).localeCompare(String(a.date)));
    const channels = category === "all" ? `<div class="channels"><p class="eyebrow eyebrow-small">EXPLORE</p><h2>作品与创作</h2><div class="channel-grid">${Object.entries(categories).map(([key,info])=>`<a class="channel" href="#/category/${key}"><span>${esc(info.english)}</span><strong>${esc(info.name)}</strong><span>↗</span></a>`).join("")}<a class="channel" href="#/archive"><span>ARCHIVE</span><strong>作品档案</strong><span>↗</span></a></div></div>` : "";
    view.innerHTML = `
      ${channels}
      <div class="section-heading">
        <div><p class="eyebrow eyebrow-small">${esc(small)}</p><h2>${esc(title)}</h2></div>
        <span class="item-count">${selected.length} 篇</span>
      </div>
      <div class="browse-tools">
        <label class="search-label" for="search-posts">搜索站内文章</label>
        <input id="search-posts" class="search-input" type="search" autocomplete="off" placeholder="搜索标题或简介…" aria-label="搜索标题或简介">
        <span class="browse-hint">可直接在电脑上离线阅读</span>
      </div>
      <div class="post-grid" id="post-grid">${sorted.length ? sorted.map(card).join("") : empty}</div>
      <aside class="sample-disclaimer">当前页面展示的是网站结构和示例文章。公开发布前，请替换演示内容。</aside>`;
    const grid = document.getElementById("post-grid");
    document.getElementById("search-posts").addEventListener("input", (event) => {
      const q = event.target.value.trim().toLocaleLowerCase();
      const found = sorted.filter(p => [p.title,p.summary,p.label,...(p.paragraphs || [])].join(" ").toLocaleLowerCase().includes(q));
      grid.innerHTML = found.length ? found.map(card).join("") : `<div class="empty-state">没有找到匹配的文章。</div>`;
    });
    setActive(category);
  }
  function renderArticle(slug) {
    const post = POSTS.find(p => p.slug === slug);
    if (!post) { renderMissing(); return; }
    const category = categories[post.category] || {name:"笔记"};
    view.innerHTML = `
      <div class="article-page">
        <a class="back-link" href="#/category/${esc(post.category)}">← 返回${esc(category.name)}</a>
        <div class="article-head">
          <div class="article-meta"><span>${esc(category.name)}</span><span>·</span><time datetime="${esc(post.date)}">${esc(post.date)}</time><span>·</span><span>${esc(post.label || "文章")}</span></div>
          <h2>${esc(post.title)}</h2>
          <p>${esc(post.summary || "")}</p>
        </div>
        <div class="article-body">${(post.paragraphs || []).map(p=>`<p>${esc(p)}</p>`).join("")}</div>
        <div class="article-end"><span>— 完 —</span><a href="#/">查看全部文章 ↗</a></div>
      </div>`;
    setActive(post.category);
  }
  function renderAbout() {
    view.innerHTML = `
      <div class="about-page">
        <p class="eyebrow eyebrow-small">ABOUT THIS SITE</p>
        <h2>关于这间书房</h2>
        ${(CONFIG.about || []).map(t=>`<p>${esc(t)}</p>`).join("")}
        <div class="about-rule"><strong>长期原则</strong><span>原稿保留在电脑；公开内容进入 GitHub；任何版本都可以回退。</span></div>
      </div>`;
    setActive("about");
  }
  function renderArchive() {
    view.innerHTML = `<div class="about-page"><p class="eyebrow eyebrow-small">WORKS & VERSIONS</p><h2>作品档案</h2><p>这里将展示经过确认、可以公开的作品目录和版本记录。</p><p>内部项目总控、创作草稿与协作说明不会自动作为公开作品发布。</p><div class="about-rule"><strong>公开原则</strong><span>区分规划、试写、已成正文与可玩游戏，不以项目登记冒充公开成品。</span></div></div>`;
    setActive("archive");
  }
  function renderMissing() {
    view.innerHTML = `<div class="empty-state large"><h2>没有找到这篇文章</h2><p>文章可能已经移动，或者链接尚未建立。</p><a href="#/">返回首页</a></div>`;
    setActive("");
  }
  function route() {
    const hash = window.location.hash || "#/";
    const path = hash.startsWith("#/") ? hash.slice(2).split("/") : [];
    if (path[0] === "article" && path[1]) renderArticle(decodeURIComponent(path.slice(1).join("/")));
    else if (path[0] === "category" && categories[path[1]]) renderHome(path[1]);
    else if (path[0] === "archive") renderArchive();
    else if (path[0] === "about") renderAbout();
    else renderHome();
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = path[0] === "article" && path[1]
      ? `${POSTS.find(p => p.slug === decodeURIComponent(path.slice(1).join("/")))?.title || "文章"}｜${CONFIG.title || "写作与思考"}`
      : `${CONFIG.title || "写作与思考"}｜${CONFIG.subtitle || "个人作品网站"}`;
  }

  const getTheme = () => { try { return localStorage.getItem("writing-site-theme"); } catch { return null; } };
  const saveTheme = (v) => { try { localStorage.setItem("writing-site-theme", v); } catch {} };
  const applyTheme = (value) => {
    document.documentElement.dataset.theme = value;
    themeButton.setAttribute("aria-label", value === "dark" ? "切换到浅色模式" : "切换到深色模式");
  };
  const preferred = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(getTheme() || preferred);
  themeButton.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next); saveTheme(next);
  });
  window.addEventListener("hashchange", route);
  route();
})();
