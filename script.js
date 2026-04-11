const translations = {
  zh: {
    pageTitle: "SearchFiles | 面向 macOS 的本地优先文件搜索",
    pageDescription:
      "SearchFiles 是一个支持中英双语的产品页面，介绍一款重视隐私的 macOS 文件搜索应用，强调本地索引、快速检索与清晰的数据边界。",
    "nav.features": "功能亮点",
    "nav.gallery": "界面展示",
    "nav.privacy": "隐私政策",
    "hero.eyebrow": "本地优先文件搜索",
    "hero.title": "在你的 Mac 文件夹中，实现更快、更清晰、更安心的搜索。",
    "hero.description":
      "SearchFiles 是一款 macOS 桌面应用，只在你的设备上建立文件元数据索引，以只读方式访问你授权的文件夹，帮助你在几秒内找到文档、代码和媒体文件。",
    "hero.primaryCta": "查看产品亮点",
    "hero.secondaryCta": "阅读隐私政策",
    "stats.local.value": "100%",
    "stats.local.label": "本地元数据索引",
    "stats.permission.value": "只读",
    "stats.permission.label": "仅访问你选择的文件夹",
    "stats.engine.value": "FTS5",
    "stats.engine.label": "SQLite 快速搜索引擎",
    "hero.noteLocal.title": "从设计开始保护隐私",
    "hero.noteLocal.text": "索引默认保留在你的 Mac 上。",
    "hero.noteSpeed.title": "为速度而生",
    "hero.noteSpeed.text": "按路径、文件名和元数据即时搜索。",
    "features.eyebrow": "为什么选择 SEARCHFILES",
    "features.title": "为真实工作目录打造的专注型桌面搜索体验",
    "features.description":
      "SearchFiles 面向需要管理大量本地文件的人群，让搜索更轻量、更可理解，也更尊重隐私。",
    "feature.one.title": "只导入你亲自选择的文件夹",
    "feature.one.body":
      "应用会为用户选定的目录保存安全作用域书签，让你始终掌握哪些位置会被索引。",
    "feature.two.title": "按文件名、完整路径和相对路径搜索",
    "feature.two.body":
      "无需反复打开 Finder，也不用记住精确目录结构，就能在多个导入文件夹中快速定位目标文件。",
    "feature.three.title": "随着文件库增长，仍能保持高效筛选",
    "feature.three.body":
      "你可以按文件夹范围、文件大小和已索引元数据缩小结果集，让搜索结果更可执行。",
    "feature.four.title": "尊重你的文件边界",
    "feature.four.body":
      "SearchFiles 当前索引的是元数据而不是文件内容，并且只请求你显式导入目录的只读权限。",
    "gallery.eyebrow": "产品导览",
    "gallery.title": "三张截图，快速理解这个产品",
    "gallery.description":
      "下面的界面展示分别覆盖导入目录、按文件大小筛选，以及在大型代码目录中进行搜索的实际场景。",
    "gallery.one.tag": "概览",
    "gallery.one.title": "从你已经信任的导入文件夹开始",
    "gallery.one.body":
      "左侧边栏让已导入的位置保持清晰可见，主工作区则专注承载搜索与结果展示。",
    "gallery.two.tag": "筛选",
    "gallery.two.title": "通过元数据快速找出大文件",
    "gallery.two.body":
      "内置文件大小过滤能力可以帮助你定位体积较大的视频、归档包或项目资源，无需额外设置。",
    "gallery.three.tag": "代码搜索",
    "gallery.three.title": "面对大型开发目录，也能保留上下文地搜索",
    "gallery.three.body":
      "开发者可以按文件名与路径快速扫描项目树，再进一步限定到单个目录缩小范围。",
    "usecases.eyebrow": "适用人群",
    "usecases.title": "为需要可靠文件搜索体验的人而设计",
    "usecases.one": "需要遍历项目树的开发者",
    "usecases.two": "整理大型档案的研究者",
    "usecases.three": "寻找重型媒体文件的内容创作者",
    "usecases.four": "希望搜索保持本地优先的普通用户",
    "privacy.eyebrow": "隐私政策",
    "privacy.title": "简单的原则：本地处理、明确授权、不做静默跟踪",
    "privacy.subtitle":
      "最后更新于 2026 年 4 月 11 日。本政策说明 SearchFiles 在你使用应用及本网站时如何处理相关信息。",
    "privacy.highlight.one.title": "不接入分析 SDK 或广告追踪器",
    "privacy.highlight.one.body":
      "SearchFiles 当前版本不在应用内使用第三方统计、广告网络或行为追踪工具。",
    "privacy.highlight.two.title": "文件夹访问由你选择，且为只读",
    "privacy.highlight.two.body":
      "应用会由你主动选择目录，再以沙盒安全、只读的方式读取这些位置的元数据建立索引。",
    "privacy.highlight.three.title": "索引数据默认留在你的设备上",
    "privacy.highlight.three.body":
      "元数据和目录书签默认保存在应用沙盒与本地数据库中，不会主动上传给开发者。",
    "policy.one.title": "1. 应用会处理哪些信息",
    "policy.one.body":
      "对于你导入的文件夹，SearchFiles 可能处理目录名、文件名、完整路径、相对路径、扩展名、文件大小以及创建或修改时间。同时会保存应用作用域书签，以便后续重新访问你已授权的位置。",
    "policy.two.title": "2. 应用不会默认收集什么",
    "policy.two.body":
      "SearchFiles 目前围绕元数据索引设计，不以文件内容搜索为默认能力，也不会嵌入广告标识符，不会在正常使用中把你的索引发送到远端服务器。",
    "policy.three.title": "3. 数据如何存储",
    "policy.three.body":
      "索引后的元数据会保存在你的 Mac 本地，通常位于应用的 Application Support 目录和沙盒容器内。你可以移除已导入文件夹，或在设备上删除本地应用数据。",
    "policy.four.title": "4. 权限与访问边界",
    "policy.four.body":
      "应用使用 macOS App Sandbox 和安全作用域书签。它只访问你显式选择的位置，并且当前 entitlement 为只读。",
    "policy.five.title": "5. 网站如何处理数据",
    "policy.five.body":
      "这个网站是一个静态产品页面。在当前仓库版本中，它不包含自定义表单、账号系统或嵌入式统计代码。你的浏览器仍可能发起加载页面和网络字体所需的标准请求。",
    "policy.six.title": "6. 联系方式",
    "policy.six.body": "如有隐私或产品问题，可通过 GitHub 主页联系发布者：",
    "footer.description":
      "一款面向 macOS 的本地优先文件搜索应用，聚焦快速元数据检索与透明的隐私边界。",
    "footer.product": "产品",
    "footer.privacy": "隐私",
    "footer.github": "GitHub",
    "footer.meta": "SearchFiles。基于 GitHub Pages 发布。"
  },
  en: {
    pageTitle: "SearchFiles | Local-First File Search for macOS",
    pageDescription:
      "SearchFiles is a bilingual product page for a privacy-first macOS file search app built for fast local indexing, instant lookup, and clear data handling.",
    "nav.features": "Features",
    "nav.gallery": "Screens",
    "nav.privacy": "Privacy",
    "hero.eyebrow": "LOCAL-FIRST FILE SEARCH",
    "hero.title": "Search across your Mac folders with speed, clarity, and privacy.",
    "hero.description":
      "SearchFiles is a macOS desktop app that indexes file metadata on your device, keeps access read-only, and helps you find documents, code, and media in seconds.",
    "hero.primaryCta": "See Product Highlights",
    "hero.secondaryCta": "Read Privacy Policy",
    "stats.local.value": "100%",
    "stats.local.label": "Local metadata index",
    "stats.permission.value": "Read-only",
    "stats.permission.label": "User-selected folder access",
    "stats.engine.value": "FTS5",
    "stats.engine.label": "Fast SQLite search engine",
    "hero.noteLocal.title": "Private by design",
    "hero.noteLocal.text": "Index stays on your Mac.",
    "hero.noteSpeed.title": "Built for speed",
    "hero.noteSpeed.text": "Search paths, names, and metadata instantly.",
    "features.eyebrow": "WHY SEARCHFILES",
    "features.title": "A focused desktop search experience for real working folders",
    "features.description":
      "SearchFiles is designed for people who work with large local libraries and need search that stays understandable, lightweight, and private.",
    "feature.one.title": "Import only the folders you choose",
    "feature.one.body":
      "The app stores security-scoped bookmarks for user-selected folders, so you stay in control of which locations are indexed.",
    "feature.two.title": "Search by name, path, and relative path",
    "feature.two.body":
      "Find the file you want across imported folders without opening Finder windows or remembering exact locations.",
    "feature.three.title": "Filter intelligently as your library grows",
    "feature.three.body":
      "Narrow large result sets by folder scope, file size, and indexed metadata to keep results actionable.",
    "feature.four.title": "Respect the boundaries of your files",
    "feature.four.body":
      "SearchFiles indexes metadata, not file contents, and it requests read-only access to folders you explicitly import.",
    "gallery.eyebrow": "PRODUCT TOUR",
    "gallery.title": "Three key views that explain the product quickly",
    "gallery.description":
      "The screenshots below show the import flow, size-based filtering, and broad code search inside real project folders.",
    "gallery.one.tag": "Overview",
    "gallery.one.title": "Start with imported folders you already trust",
    "gallery.one.body":
      "A clean sidebar keeps imported locations visible, while the main workspace stays focused on search and results.",
    "gallery.two.tag": "Filter",
    "gallery.two.title": "Locate large files with fast metadata filtering",
    "gallery.two.body":
      "Built-in file size filtering helps you surface oversized videos, archives, or project assets without extra setup.",
    "gallery.three.tag": "Code Search",
    "gallery.three.title": "Search broad development folders without losing context",
    "gallery.three.body":
      "Developers can quickly scan project trees by filename and path, then refine results within a selected folder.",
    "usecases.eyebrow": "WHO IT HELPS",
    "usecases.title": "Built for people who need file search to feel dependable",
    "usecases.one": "Developers searching project trees",
    "usecases.two": "Researchers organizing large archives",
    "usecases.three": "Creators finding heavy media files",
    "usecases.four": "Anyone who wants local-first search",
    "privacy.eyebrow": "PRIVACY POLICY",
    "privacy.title": "Simple rules: local processing, explicit permissions, no silent tracking",
    "privacy.subtitle":
      "Last updated: April 11, 2026. This policy describes how SearchFiles handles information when you use the app and this website.",
    "privacy.highlight.one.title": "No analytics SDKs or advertising trackers",
    "privacy.highlight.one.body":
      "SearchFiles does not use third-party analytics, ad networks, or behavioral tracking in the app.",
    "privacy.highlight.two.title": "Folder access is read-only and user-selected",
    "privacy.highlight.two.body":
      "The app asks you to choose folders and then uses sandbox-safe, read-only access to index metadata from those locations.",
    "privacy.highlight.three.title": "Indexed data stays on your device",
    "privacy.highlight.three.body":
      "Metadata and folder bookmarks are stored locally in the app sandbox and are not uploaded to the developer by default.",
    "policy.one.title": "1. Information the app processes",
    "policy.one.body":
      "SearchFiles may process folder names, file names, paths, relative paths, extensions, file sizes, and file creation or modification dates for folders you import. It also stores app-scoped bookmarks so the app can reopen approved folders later.",
    "policy.two.title": "2. What the app does not collect",
    "policy.two.body":
      "SearchFiles is currently designed around metadata indexing. It does not intentionally read file contents for search, does not embed advertising identifiers, and does not send your index to a remote server as part of normal operation.",
    "policy.three.title": "3. How data is stored",
    "policy.three.body":
      "Indexed metadata is stored locally on your Mac, typically inside the app's Application Support directory and sandbox container. You can remove imported folders and delete local app data from your device.",
    "policy.four.title": "4. Permissions and access",
    "policy.four.body":
      "The app uses macOS App Sandbox and security-scoped bookmarks. Folder access is limited to locations you explicitly select, and the current entitlement is read-only.",
    "policy.five.title": "5. Website data handling",
    "policy.five.body":
      "This website is a static product page. It does not include custom forms, accounts, or embedded analytics in this repository version. Your browser may still make standard requests needed to load the site and web fonts.",
    "policy.six.title": "6. Contact",
    "policy.six.body": "For privacy or product questions, please contact the publisher through the GitHub profile:",
    "footer.description":
      "A local-first macOS file search app focused on fast metadata search and transparent privacy boundaries.",
    "footer.product": "Product",
    "footer.privacy": "Privacy",
    "footer.github": "GitHub",
    "footer.meta": "SearchFiles. Published with GitHub Pages."
  }
};

const textNodes = [...document.querySelectorAll("[data-i18n]")];
const pageDescription = document.querySelector('meta[name="description"]');
const footerYear = document.getElementById("footer-year");
const heroImage = document.getElementById("hero-image");
const galleryOverview = document.getElementById("gallery-image-overview");
const gallerySize = document.getElementById("gallery-image-size");
const galleryCode = document.getElementById("gallery-image-code");
const langButtons = [...document.querySelectorAll(".lang-btn")];

const altText = {
  zh: {
    hero: "SearchFiles 应用概览截图",
    overview: "SearchFiles 概览界面截图",
    size: "SearchFiles 文件大小筛选截图",
    code: "SearchFiles 代码目录搜索截图"
  },
  en: {
    hero: "SearchFiles overview screenshot",
    overview: "SearchFiles overview screenshot",
    size: "SearchFiles size filter screenshot",
    code: "SearchFiles code search screenshot"
  }
};

function setLanguage(language) {
  const locale = translations[language] ? language : "en";
  const copy = translations[locale];

  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  document.title = copy.pageTitle;
  pageDescription?.setAttribute("content", copy.pageDescription);

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  heroImage.alt = altText[locale].hero;
  galleryOverview.alt = altText[locale].overview;
  gallerySize.alt = altText[locale].size;
  galleryCode.alt = altText[locale].code;

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === locale);
  });

  window.localStorage.setItem("searchfiles-language", locale);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

footerYear.textContent = new Date().getFullYear();

const storedLanguage = window.localStorage.getItem("searchfiles-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
setLanguage(storedLanguage || browserLanguage);
