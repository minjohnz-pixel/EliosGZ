/* EliosGZ V0.3 · 纯静态中英界面；每篇作品独立决定语言版本。 */
(() => {
  "use strict";
  const CONFIG = window.SITE_CONFIG || {};
  const POSTS = Array.isArray(window.SITE_POSTS) ? window.SITE_POSTS : [];
  const CATEGORY_KEYS = ["fiction", "script", "game", "essay", "thought"];
  const I18N = {
    zh: {
      skip: "跳转到正文", brandSubtitle: "写作与思考", navHome: "首页",
      catFiction: "小说", catScript: "剧本", catGame: "游戏", catEssay: "随笔", catThought: "思想",
      navArchive: "作品档案", navAbout: "关于", eyebrow: "AN OPEN NOTEBOOK",
      heroLine1: "文字值得有一个", heroLine2: "安静停留的地方。",
      heroLead: "小说、剧本、游戏、随笔与思想笔记。这里先是一间书房，然后才是一座网站。",
      metaStatic: "独立创作网站", metaBilingual: "中英界面自由切换", metaOriginal: "尊重作品原文",
      footer: "保留文字，也保留修改的自由。", backTop: "回到首页 ↑",
      explore: "EXPLORE", exploreTitle: "作品与创作", recent: "RECENT WRITING", recentTitle: "最新文字",
      workUnit: "篇作品", searchLabel: "搜索作品", searchPlaceholder: "搜索标题、简介或正文…",
      offline: "可在电脑上离线阅读", noWorks: "栏目已建立，暂无确认可公开的作品。",
      noResults: "没有找到匹配的作品。", disclaimer: "目前展示的是网站结构和演示文章。正式作品将在核定后公开。",
      sample: "演示内容", article: "作品", articleBack: "返回", allWorks: "查看全部作品 ↗",
      originalOnly: "此作品暂未提供英文版，以下保留中文原文。", englishOnly: "此作品暂无中文版，以下保留英文原文。",
      workLanguage: "作品语言", bilingual: "中文 / English", chineseOnly: "仅中文", englishOnlyLabel: "仅英文",
      aboutEyebrow: "ABOUT THIS SITE", aboutTitle: "关于这间书房",
      aboutDefault1: "EliosGZ 是一个为小说、剧本、游戏、随笔和思想写作建立的独立空间。",
      aboutDefault2: "站点界面可以切换中英文；每部作品是否提供另一种语言版本，取决于该作品本身，不会自动生成未经确认的译文。",
      principleTitle: "长期原则", principleText: "原稿留在私人工作区；仅将确认可以公开的内容发布到 GitHub Pages。",
      archiveEyebrow: "WORKS & VERSIONS", archiveTitle: "作品档案",
      archiveText1: "这里将展示经过确认、可以公开的作品目录、版本说明与创作记录。",
      archiveText2: "内部项目总控、未发表的创作草稿和协作说明不会自动公开。",
      archiveRuleTitle: "公开原则", archiveRuleText: "区分构思、试写、正式正文、游戏开发版和可玩版本；不以项目登记冒充已经完成的作品。",
      missingTitle: "没有找到这篇作品", missingText: "作品可能已经移动，或者链接尚未建立。", homeLink: "返回首页",
      metaDescription: "EliosGZ：小说、剧本、游戏、随笔与思想的双语创作网站。",
      themeDark: "切换到深色模式", themeLight: "切换到浅色模式", read: "阅读",
      noArticleText: "暂无正文。"
    },
    en: {
      skip: "Skip to content", brandSubtitle: "WRITING & THOUGHT", navHome: "Home",
      catFiction: "Fiction", catScript: "Scripts", catGame: "Games", catEssay: "Essays", catThought: "Ideas",
      navArchive: "Archive", navAbout: "About", eyebrow: "AN OPEN NOTEBOOK",
      heroLine1: "A quiet place", heroLine2: "for words to stay.",
      heroLead: "Fiction, scripts, games, essays and evolving ideas. A place to write, read and return to.",
      metaStatic: "Independent creative site", metaBilingual: "Chinese / English interface", metaOriginal: "Original texts respected",
      footer: "Keep the words. Keep the freedom to revise.", backTop: "Back to top ↑",
      explore: "EXPLORE", exploreTitle: "Works & Creation", recent: "RECENT WRITING", recentTitle: "Recent Works",
      workUnit: " works", searchLabel: "Search works", searchPlaceholder: "Search titles, descriptions and text…",
      offline: "Works offline on your computer", noWorks: "This section is ready; no works have been cleared for public release yet.",
      noResults: "No matching works found.", disclaimer: "This site currently contains layout samples. Finished works will be published only when approved for release.",
      sample: "Sample content", article: "Work", articleBack: "Back to", allWorks: "View all works ↗",
      originalOnly: "An English edition is not available for this work. The original Chinese text is shown below.",
      englishOnly: "A Chinese edition is not available for this work. The original English text is shown below.",
      workLanguage: "Work language", bilingual: "中文 / English", chineseOnly: "Chinese only", englishOnlyLabel: "English only",
      aboutEyebrow: "ABOUT THIS SITE", aboutTitle: "About This Studio",
      aboutDefault1: "EliosGZ is an independent space for fiction, scripts, games, essays and ideas in progress.",
      aboutDefault2: "The interface is bilingual. Each work has its own language availability; unapproved translations are never generated automatically.",
      principleTitle: "Long-term principle", principleText: "Keep drafts in a private workspace. Publish only material approved for public release to GitHub Pages.",
      archiveEyebrow: "WORKS & VERSIONS", archiveTitle: "Works Archive",
      archiveText1: "Approved public works, editions and version notes will appear here.",
      archiveText2: "Internal project records, unpublished drafts and collaboration notes are not published automatically.",
      archiveRuleTitle: "Publishing policy", archiveRuleText: "Distinguish concepts, drafts, completed texts, game development builds and playable releases.",
      missingTitle: "Work not found", missingText: "The work may have moved or the link is not yet available.", homeLink: "Return home",
      metaDescription: "EliosGZ: a bilingual creative website for fiction, scripts, games, essays and ideas.",
      themeDark: "Switch to dark mode", themeLight: "Switch to light mode", read: "Read",
      noArticleText: "Text not available yet."
    }
  };
  const CATEGORY_LABELS = {
    fiction: "catFiction", script: "catScript", game: "catGame", essay: "catEssay", thought: "catThought"
  };
  const CATEGORY_EN = {fiction:"FICTION",script:"SCRIPTS",game:"GAMES",essay:"ESSAYS",thought:"IDEAS"};
  const view = document.getElementById("view");
  const themeButton = document.getElementById("theme-switch");
  const description = document.querySelector('meta[name="description"]');
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[ch]);
  const safeRead = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const safeSave = (key,value) => { try { localStorage.setItem(key,value); } catch {} };
  let lang = safeRead("eliosgz-site-language") === "en" ? "en" : "zh";
  let theme = safeRead("writing-site-theme") || (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const articleSelections = new Map();
  const tr = (key) => I18N[lang][key] || key;
  const categoryTitle = key => CATEGORY_LABELS[key] ? tr(CATEGORY_LABELS[key]) : tr("article");
  const postHref = post => `#/article/${encodeURIComponent(post.slug)}`;
  const readableSlug = raw => { try { return decodeURIComponent(raw); } catch { return ""; } };

  /* 兼容 V0.1/V0.2：旧文章默认中文。
   * 新作品也可设置 language:'en' 作为英文原文。
   * translations.en / translations.zh 可按篇添加，但不会自动翻译。 */
  function versionsFor(post) {
    const baseLang = post.language === "en" ? "en" : "zh";
    const versions = {};
    if (typeof post.title === "string" && post.title.trim()) {
      versions[baseLang] = {title:post.title, summary:post.summary || "", paragraphs:post.paragraphs || []};
    }
    for (const locale of ["zh","en"]) {
      const v = post.translations?.[locale];
      if (v && typeof v.title === "string" && v.title.trim()) {
        versions[locale] = {title:v.title,summary:v.summary || "", paragraphs:Array.isArray(v.paragraphs) ? v.paragraphs : []};
      }
    }
    return versions;
  }
  function pickVersion(post, locale = lang) {
    const versions = versionsFor(post);
    const chosen = versions[locale] ? locale : versions.zh ? "zh" : versions.en ? "en" : locale;
    return {chosen, versions, work:versions[chosen] || {title:post.slug,summary:"",paragraphs:[]}};
  }
  const languageTag = (post) => {
    const v = versionsFor(post);
    return v.zh && v.en ? tr("bilingual") : v.zh ? tr("chineseOnly") : tr("englishOnlyLabel");
  };
  const textIndex = p => {
    const v=versionsFor(p);
    return [p.label || "",p.date || "",...Object.values(v).flatMap(x => [x.title,x.summary,...x.paragraphs])].join(" ").toLocaleLowerCase();
  };

  function setActive(active) {
    document.querySelectorAll("[data-nav]").forEach(el => {
      if (el.dataset.nav === active) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    });
  }
  function updateStatic() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.getElementById("brand-mark").textContent = lang === "zh" ? "文" : "E";
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = tr(el.dataset.i18n); });
    document.getElementById("main-nav").setAttribute("aria-label",lang === "zh" ? "主导航" : "Main navigation");
    document.querySelectorAll("[data-site-lang]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.siteLang === lang)));
    description.setAttribute("content",tr("metaDescription"));
    themeButton.setAttribute("aria-label", theme === "dark" ? tr("themeLight") : tr("themeDark"));
    themeButton.title = themeButton.getAttribute("aria-label");
  }
  function card(post) {
    const {chosen, work} = pickVersion(post);
    const label = post.demo ? tr("sample") : (typeof post.label === "object" ? (post.label[lang] || post.label.zh || "") : post.label || tr("article"));
    return `
      <article class="post-card">
        <a class="card-hit" href="${postHref(post)}" aria-label="${esc(tr("read"))}: ${esc(work.title)}">
          <div class="card-top"><span class="category-name">${esc(categoryTitle(post.category))}</span><time datetime="${esc(post.date)}">${esc(post.date || "")}</time></div>
          <h3 lang="${chosen === "zh" ? "zh-CN" : "en"}">${esc(work.title)}</h3>
          <p lang="${chosen === "zh" ? "zh-CN" : "en"}">${esc(work.summary)}</p>
          <div class="card-bottom"><span>${esc(label)}</span><span class="edition-tag">${esc(languageTag(post))}</span><span class="arrow-mark" aria-hidden="true">↗</span></div>
        </a>
      </article>`;
  }
  function renderHome(category="all") {
    const selected = category === "all" ? POSTS : POSTS.filter(p => p.category === category);
    const sorted = [...selected].sort((a,b) => String(b.date || "").localeCompare(String(a.date || "")));
    const channels = category === "all" ? `<div class="channels">
       <p class="eyebrow eyebrow-small">${tr("explore")}</p><h2>${tr("exploreTitle")}</h2>
       <div class="channel-grid">${CATEGORY_KEYS.map(key => `<a class="channel" href="#/category/${key}"><span>${CATEGORY_EN[key]}</span><strong>${esc(categoryTitle(key))}</strong><span aria-hidden="true">↗</span></a>`).join("")}
       <a class="channel" href="#/archive"><span>ARCHIVE</span><strong>${tr("navArchive")}</strong><span aria-hidden="true">↗</span></a></div></div>` : "";
    view.innerHTML = `${channels}
      <div class="section-heading"><div><p class="eyebrow eyebrow-small">${category === "all" ? tr("recent") : CATEGORY_EN[category]}</p>
      <h2>${category === "all" ? tr("recentTitle") : esc(categoryTitle(category))}</h2></div>
      <span class="item-count">${sorted.length}${tr("workUnit")}</span></div>
      <div class="browse-tools"><label class="search-label" for="search-posts">${tr("searchLabel")}</label>
      <input id="search-posts" class="search-input" type="search" autocomplete="off" placeholder="${tr("searchPlaceholder")}" aria-label="${tr("searchLabel")}">
      <span class="browse-hint">${tr("offline")}</span></div>
      <div class="post-grid" id="post-grid">${sorted.length ? sorted.map(card).join("") : `<div class="empty-state">${tr("noWorks")}</div>`}</div>
      <aside class="sample-disclaimer">${tr("disclaimer")}</aside>`;
    const grid = document.getElementById("post-grid");
    const input = document.getElementById("search-posts");
    input.addEventListener("input",()=>{
      const q=input.value.trim().toLocaleLowerCase();
      const matches=sorted.filter(p=>textIndex(p).includes(q));
      grid.innerHTML=matches.length ? matches.map(card).join("") : `<div class="empty-state">${tr("noResults")}</div>`;
    });
    setActive(category);
  }
  function renderArticle(slug) {
    const post = POSTS.find(p=>p.slug === slug);
    if (!post) { renderMissing(); return; }
    const current = articleSelections.get(slug) || lang;
    const {chosen, work, versions} = pickVersion(post,current);
    const category=categoryTitle(post.category);
    const label = post.demo ? tr("sample") : (typeof post.label === "object" ? (post.label[lang] || post.label.zh || "") : post.label || tr("article"));
    const both=!!(versions.zh && versions.en);
    let editionNotice="";
    if (!both && chosen !== lang) editionNotice = `<div class="language-notice" role="status">${tr(chosen === "zh" ? "originalOnly" : "englishOnly")}</div>`;
    const picker = both ? `<div class="article-language-picker"><span>${tr("workLanguage")}</span><div class="lang-switch" role="group" aria-label="${tr("workLanguage")}">
      <button type="button" data-article-lang="zh" aria-pressed="${chosen === "zh"}" lang="zh-CN">中文</button>
      <span aria-hidden="true">/</span><button type="button" data-article-lang="en" aria-pressed="${chosen === "en"}" lang="en">EN</button></div></div>` : "";
    view.innerHTML=`<div class="article-page">
      <a class="back-link" href="#/category/${esc(post.category)}">← ${tr("articleBack")} ${esc(category)}</a>
      <div class="article-head"><div class="article-meta"><span>${esc(category)}</span><span aria-hidden="true">·</span>
      <time datetime="${esc(post.date)}">${esc(post.date || "")}</time><span aria-hidden="true">·</span><span>${esc(label)}</span></div>
      <h2 lang="${chosen === "zh" ? "zh-CN" : "en"}">${esc(work.title)}</h2>
      <p lang="${chosen === "zh" ? "zh-CN" : "en"}">${esc(work.summary)}</p></div>
      ${picker}${editionNotice}
      <div class="article-body" lang="${chosen === "zh" ? "zh-CN" : "en"}">${work.paragraphs.length ? work.paragraphs.map(p=>`<p>${esc(p)}</p>`).join("") : `<p>${tr("noArticleText")}</p>`}</div>
      <div class="article-end"><span>—</span><a href="#/">${tr("allWorks")}</a></div>
    </div>`;
    view.querySelectorAll("[data-article-lang]").forEach(btn=>btn.addEventListener("click",()=>{
      articleSelections.set(slug,btn.dataset.articleLang);
      renderArticle(slug);
    }));
    setActive(post.category);
  }
  function renderAbout() {
    const localized = CONFIG.about?.[lang];
    const about = Array.isArray(localized) ? localized : [tr("aboutDefault1"),tr("aboutDefault2")];
    view.innerHTML=`<div class="about-page"><p class="eyebrow eyebrow-small">${tr("aboutEyebrow")}</p><h2>${tr("aboutTitle")}</h2>
      ${about.map(p=>`<p>${esc(p)}</p>`).join("")}
      <div class="about-rule"><strong>${tr("principleTitle")}</strong><span>${tr("principleText")}</span></div></div>`;
    setActive("about");
  }
  function renderArchive() {
    view.innerHTML=`<div class="about-page"><p class="eyebrow eyebrow-small">${tr("archiveEyebrow")}</p><h2>${tr("archiveTitle")}</h2>
      <p>${tr("archiveText1")}</p><p>${tr("archiveText2")}</p>
      <div class="about-rule"><strong>${tr("archiveRuleTitle")}</strong><span>${tr("archiveRuleText")}</span></div></div>`;
    setActive("archive");
  }
  function renderMissing() {
    view.innerHTML=`<div class="empty-state large"><h2>${tr("missingTitle")}</h2><p>${tr("missingText")}</p><a href="#/">${tr("homeLink")}</a></div>`;
    setActive("");
  }
  function route({scroll=true}={}) {
    const hash=window.location.hash || "#/";
    const path=hash.startsWith("#/") ? hash.slice(2).split("/") : [];
    let post=null;
    if (path[0] === "article" && path[1]) {
      const slug=readableSlug(path.slice(1).join("/"));
      post=POSTS.find(p=>p.slug === slug);
      renderArticle(slug);
    } else if (path[0] === "category" && CATEGORY_KEYS.includes(path[1])) renderHome(path[1]);
    else if (path[0] === "archive") renderArchive();
    else if (path[0] === "about") renderAbout();
    else renderHome();
    const work=post ? pickVersion(post,articleSelections.get(post.slug) || lang).work : null;
    document.title = (work?.title ? `${work.title}｜` : "") + (lang === "zh" ? "EliosGZ｜写作与思考" : "EliosGZ | Writing & Thought");
    if (scroll) window.scrollTo({top:0,behavior:"instant"});
  }
  function applyTheme() {
    document.documentElement.dataset.theme=theme;
    themeButton.setAttribute("aria-label",theme === "dark" ? tr("themeLight") : tr("themeDark"));
    themeButton.title=themeButton.getAttribute("aria-label");
  }
  document.querySelectorAll("[data-site-lang]").forEach(button=>button.addEventListener("click",()=>{
    const next=button.dataset.siteLang;
    if (next === lang || !I18N[next]) return;
    lang=next;
    safeSave("eliosgz-site-language",lang);
    // 网站界面切换不强制改变已经由读者独立选择的作品语言。
    updateStatic(); route({scroll:false});
  }));
  themeButton.addEventListener("click",()=>{
    theme = theme === "dark" ? "light" : "dark";
    safeSave("writing-site-theme",theme);
    applyTheme();
  });
  window.addEventListener("hashchange",()=>route());
  updateStatic(); applyTheme(); route();
})();
