/**
 * EliosGZ V0.3 · 仅公开经过确认可以发布的作品。
 * 两种互不相同的语言：网站 UI 与作品正文。
 * 1. 中文原文：language: "zh"（可省略）；填 title、summary、paragraphs。
 * 2. 英文原文：language: "en"；同样使用 title、summary、paragraphs。
 * 3. 若实际完成了另一语言版本，才添加 translations.en 或 translations.zh。
 *    任何作品都不强制翻译！浏览英文界面时，中文单语作品仍保留中文原文。
 * 4. 现有全部作品均为演示内容，不是作者正式作品。
 */
window.SITE_CONFIG = {
  title: {zh: "写作与思考", en: "Writing & Thought"},
  subtitle: {zh: "小说 · 剧本 · 游戏 · 随笔 · 思想", en: "Fiction · Scripts · Games · Essays · Ideas"},
  about: {
    zh: [
      "EliosGZ 是一个为小说、剧本、游戏、随笔及思想研究建立的独立创作空间。",
      "网站界面可以切换中文和英文；作品是否提供英文版，由每部作品独立决定。这里不会自动展示未经确认的翻译。"
    ],
    en: [
      "EliosGZ is an independent space for fiction, scripts, games, essays and ideas.",
      "You can switch the website interface between Chinese and English. Language editions are decided work by work; unapproved translations are never published automatically."
    ]
  }
};

window.SITE_POSTS = [
  {
    slug: "demo-fiction", category: "fiction", language: "zh", demo: true,
    title: "小说试读：尚未开始的故事",
    summary: "一篇演示文章，用来测试长篇小说的阅读样式与行间距。",
    date: "2026-10-25", paragraphs: [
      "【演示文字，非正式作品】",
      "傍晚的雨停了。桌上有一封信，信封很旧，封口却像是刚刚粘上的。",
      "他没有立即拆开。他先把信放到灯下，仔细看了看邮戳。邮戳上的日期，是明天。",
      "这是为了测试小说阅读页面而编写的短小示例。请用你自己的正文替换它。"
    ]
    // 无 translations.en，即为中文单语作品，英文界面不伪造翻译。
  },
  {
    slug: "demo-essay", category: "essay", language: "zh", demo: true,
    title: "随笔：给一个瞬间留点空白",
    summary: "一篇演示随笔，呈现适合慢慢阅读的文字排版。",
    date: "2026-10-25", paragraphs: [
      "【演示文字，非正式作品】",
      "一篇文章不一定要急着抵达结论。它可以从一件极小的事情开始，也可以停在一个尚未想清楚的问题前。",
      "网页也不必塞满东西。读者愿意多看一会儿，往往不是因为按钮足够多，而是因为字句之间留出了呼吸的地方。",
      "这段文字仅用于显示排版效果。"
    ],
    // 此篇特意提供演示英文版，用于验证作品独立语言切换。
    translations: {en: {
      title: "Essay Sample: Leave a Moment Some Space",
      summary: "A sample essay demonstrating calm, readable typography.",
      paragraphs: [
        "[Sample only — not a published work]",
        "An essay need not rush toward a conclusion. It may begin with the smallest thing, or pause beside a question that remains unresolved.",
        "A web page need not be crowded, either. Readers may stay longer not because it offers more buttons, but because the words have room to breathe.",
        "This passage is here only to demonstrate the reading layout."
      ]
    }}
  },
  {
    slug: "demo-thought", category: "thought", language: "zh", demo: true,
    title: "思想札记：问题可以继续开放",
    summary: "一种方便未来修改、增补与交叉引用的笔记格式。",
    date: "2026-10-25", paragraphs: [
      "【演示文字，非正式作品】",
      "提出一个问题，并不等于已经回答了它。提出一个假设，也不等于把它宣布为事实。",
      "在这里，笔记可以保留时间、版本和后来的修订。新的认识未必需要抹掉过去的认识，也可以补充其适用条件。",
      "这段文字仅用于测试思想札记页面。"
    ]
  }
];
