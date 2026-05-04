const languageMeta = {
  "zh-Hans": { htmlLang: "zh-Hans" },
  "zh-Hant": { htmlLang: "zh-Hant" },
  en: { htmlLang: "en" },
  fr: { htmlLang: "fr" },
  de: { htmlLang: "de" },
  ja: { htmlLang: "ja" },
  it: { htmlLang: "it" },
  pt: { htmlLang: "pt" },
  es: { htmlLang: "es" },
  ko: { htmlLang: "ko" }
};

const languageAliases = {
  zh: "zh-Hans",
  "zh-cn": "zh-Hans",
  "zh-sg": "zh-Hans",
  "zh-hans": "zh-Hans",
  "zh-tw": "zh-Hant",
  "zh-hk": "zh-Hant",
  "zh-mo": "zh-Hant",
  "zh-hant": "zh-Hant",
  en: "en",
  fr: "fr",
  de: "de",
  ja: "ja",
  it: "it",
  pt: "pt",
  es: "es",
  ko: "ko"
};

const sharedCopy = {
  "hero.downloadBottom": "Mac App Store",
  "stats.local.value": "100%",
  "stats.engine.value": "FTS5",
  "footer.github": "GitHub"
};

const translations = {
  "zh-Hans": {
    ...sharedCopy,
    pageTitle: "SearchFiles | 面向 macOS 的本地优先文件搜索",
    pageDescription:
      "SearchFiles 是一个支持多语言的产品页面，介绍一款重视隐私的 macOS 文件搜索应用，强调本地索引、快速检索与清晰的数据边界。",
    "language.switcher": "选择语言",
    "nav.features": "功能亮点",
    "nav.gallery": "界面展示",
    "nav.privacy": "隐私政策",
    "hero.eyebrow": "本地优先文件搜索",
    "hero.title": "在你的 Mac 文件夹中，实现更快、更清晰、更安心的搜索。",
    "hero.description":
      "SearchFiles 是一款 macOS 桌面应用，只在你的设备上建立文件元数据索引，以只读方式访问你授权的文件夹，帮助你在几秒内找到文档、代码和媒体文件。",
    "hero.downloadTop": "立即下载",
    "hero.downloadNote": "在 macOS 上会优先打开 App Store，其他设备则回退到网页预览页。",
    "hero.primaryCta": "查看产品亮点",
    "hero.secondaryCta": "阅读隐私政策",
    "stats.local.label": "本地元数据索引",
    "stats.permission.value": "只读",
    "stats.permission.label": "仅访问你选择的文件夹",
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
    "footer.meta": "SearchFiles。基于 GitHub Pages 发布。"
  },
  "zh-Hant": {
    ...sharedCopy,
    pageTitle: "SearchFiles | 面向 macOS 的本機優先檔案搜尋",
    pageDescription:
      "SearchFiles 是一個支援多語言的產品頁面，介紹一款重視隱私的 macOS 檔案搜尋應用程式，強調本機索引、快速搜尋與清楚的資料邊界。",
    "language.switcher": "選擇語言",
    "nav.features": "功能亮點",
    "nav.gallery": "介面展示",
    "nav.privacy": "隱私政策",
    "hero.eyebrow": "本機優先檔案搜尋",
    "hero.title": "在你的 Mac 資料夾中，更快、更清楚、更安心地搜尋。",
    "hero.description":
      "SearchFiles 是一款 macOS 桌面應用程式，只在你的裝置上建立檔案元資料索引，以唯讀方式存取你授權的資料夾，幫助你在幾秒內找到文件、程式碼和媒體檔案。",
    "hero.downloadTop": "立即下載",
    "hero.downloadNote": "在 macOS 上會優先開啟 App Store，其他裝置則回退到網頁預覽頁。",
    "hero.primaryCta": "查看產品亮點",
    "hero.secondaryCta": "閱讀隱私政策",
    "stats.local.label": "本機元資料索引",
    "stats.permission.value": "唯讀",
    "stats.permission.label": "僅存取你選擇的資料夾",
    "stats.engine.label": "SQLite 快速搜尋引擎",
    "hero.noteLocal.title": "從設計開始保護隱私",
    "hero.noteLocal.text": "索引預設保留在你的 Mac 上。",
    "hero.noteSpeed.title": "為速度而生",
    "hero.noteSpeed.text": "按路徑、檔名和元資料即時搜尋。",
    "features.eyebrow": "為什麼選擇 SEARCHFILES",
    "features.title": "為真實工作資料夾打造的專注型桌面搜尋體驗",
    "features.description":
      "SearchFiles 面向需要管理大量本機檔案的人，讓搜尋更輕量、更容易理解，也更尊重隱私。",
    "feature.one.title": "只匯入你親自選擇的資料夾",
    "feature.one.body":
      "應用程式會為使用者選定的目錄保存安全作用域書籤，讓你始終掌握哪些位置會被索引。",
    "feature.two.title": "按檔名、完整路徑和相對路徑搜尋",
    "feature.two.body":
      "不必反覆開啟 Finder，也不用記住精確目錄結構，就能在多個匯入資料夾中快速定位目標檔案。",
    "feature.three.title": "隨著檔案庫成長，仍能保持高效篩選",
    "feature.three.body":
      "你可以按資料夾範圍、檔案大小和已索引元資料縮小結果集，讓搜尋結果更容易採取行動。",
    "feature.four.title": "尊重你的檔案邊界",
    "feature.four.body":
      "SearchFiles 目前索引的是元資料而不是檔案內容，並且只請求你明確匯入目錄的唯讀權限。",
    "gallery.eyebrow": "產品導覽",
    "gallery.title": "三張截圖，快速理解這個產品",
    "gallery.description":
      "下面的介面展示分別涵蓋匯入目錄、按檔案大小篩選，以及在大型程式碼目錄中搜尋的實際場景。",
    "gallery.one.tag": "概覽",
    "gallery.one.title": "從你已經信任的匯入資料夾開始",
    "gallery.one.body":
      "左側邊欄讓已匯入的位置保持清晰可見，主工作區則專注承載搜尋與結果展示。",
    "gallery.two.tag": "篩選",
    "gallery.two.title": "透過元資料快速找出大型檔案",
    "gallery.two.body":
      "內建檔案大小篩選能力可以幫助你定位體積較大的影片、壓縮檔或專案資源，無需額外設定。",
    "gallery.three.tag": "程式碼搜尋",
    "gallery.three.title": "面對大型開發目錄，也能保留脈絡地搜尋",
    "gallery.three.body":
      "開發者可以按檔名與路徑快速掃描專案樹，再進一步限定到單一目錄縮小範圍。",
    "usecases.eyebrow": "適用人群",
    "usecases.title": "為需要可靠檔案搜尋體驗的人而設計",
    "usecases.one": "需要遍歷專案樹的開發者",
    "usecases.two": "整理大型檔案庫的研究者",
    "usecases.three": "尋找大型媒體檔案的內容創作者",
    "usecases.four": "希望搜尋保持本機優先的一般使用者",
    "privacy.eyebrow": "隱私政策",
    "privacy.title": "簡單的原則：本機處理、明確授權、不做靜默追蹤",
    "privacy.subtitle":
      "最後更新於 2026 年 4 月 11 日。本政策說明 SearchFiles 在你使用應用程式及本網站時如何處理相關資訊。",
    "privacy.highlight.one.title": "不接入分析 SDK 或廣告追蹤器",
    "privacy.highlight.one.body":
      "SearchFiles 目前版本不在應用程式內使用第三方統計、廣告網路或行為追蹤工具。",
    "privacy.highlight.two.title": "資料夾存取由你選擇，且為唯讀",
    "privacy.highlight.two.body":
      "應用程式會由你主動選擇目錄，再以沙盒安全、唯讀的方式讀取這些位置的元資料建立索引。",
    "privacy.highlight.three.title": "索引資料預設留在你的裝置上",
    "privacy.highlight.three.body":
      "元資料和目錄書籤預設保存在應用程式沙盒與本機資料庫中，不會主動上傳給開發者。",
    "policy.one.title": "1. 應用程式會處理哪些資訊",
    "policy.one.body":
      "對於你匯入的資料夾，SearchFiles 可能處理目錄名、檔名、完整路徑、相對路徑、副檔名、檔案大小以及建立或修改時間。同時會保存應用程式作用域書籤，以便後續重新存取你已授權的位置。",
    "policy.two.title": "2. 應用程式不會預設收集什麼",
    "policy.two.body":
      "SearchFiles 目前圍繞元資料索引設計，不以檔案內容搜尋為預設能力，也不會嵌入廣告識別碼，不會在正常使用中把你的索引傳送到遠端伺服器。",
    "policy.three.title": "3. 資料如何儲存",
    "policy.three.body":
      "索引後的元資料會保存在你的 Mac 本機，通常位於應用程式的 Application Support 目錄和沙盒容器內。你可以移除已匯入資料夾，或在裝置上刪除本機應用程式資料。",
    "policy.four.title": "4. 權限與存取邊界",
    "policy.four.body":
      "應用程式使用 macOS App Sandbox 和安全作用域書籤。它只存取你明確選擇的位置，並且目前 entitlement 為唯讀。",
    "policy.five.title": "5. 網站如何處理資料",
    "policy.five.body":
      "這個網站是一個靜態產品頁面。在目前倉庫版本中，它不包含自訂表單、帳號系統或嵌入式統計程式碼。你的瀏覽器仍可能發起載入頁面和網路字型所需的標準請求。",
    "policy.six.title": "6. 聯絡方式",
    "policy.six.body": "如有隱私或產品問題，可透過 GitHub 個人頁面聯絡發布者：",
    "footer.description":
      "一款面向 macOS 的本機優先檔案搜尋應用程式，聚焦快速元資料搜尋與透明的隱私邊界。",
    "footer.product": "產品",
    "footer.privacy": "隱私",
    "footer.meta": "SearchFiles。基於 GitHub Pages 發布。"
  },
  en: {
    ...sharedCopy,
    pageTitle: "SearchFiles | Local-First File Search for macOS",
    pageDescription:
      "SearchFiles is a multilingual product page for a privacy-first macOS file search app built for fast local indexing, instant lookup, and clear data handling.",
    "language.switcher": "Choose language",
    "nav.features": "Features",
    "nav.gallery": "Screens",
    "nav.privacy": "Privacy",
    "hero.eyebrow": "LOCAL-FIRST FILE SEARCH",
    "hero.title": "Search across your Mac folders with speed, clarity, and privacy.",
    "hero.description":
      "SearchFiles is a macOS desktop app that indexes file metadata on your device, keeps access read-only, and helps you find documents, code, and media in seconds.",
    "hero.downloadTop": "Download on the",
    "hero.downloadNote": "Opens the Mac App Store on macOS, with a web fallback elsewhere.",
    "hero.primaryCta": "See Product Highlights",
    "hero.secondaryCta": "Read Privacy Policy",
    "stats.local.label": "Local metadata index",
    "stats.permission.value": "Read-only",
    "stats.permission.label": "User-selected folder access",
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
    "footer.meta": "SearchFiles. Published with GitHub Pages."
  },
  fr: {
    ...sharedCopy,
    pageTitle: "SearchFiles | Recherche de fichiers locale pour macOS",
    pageDescription:
      "SearchFiles est une page produit multilingue pour une app macOS de recherche de fichiers axée sur la confidentialité, avec indexation locale rapide, recherche instantanée et gestion claire des données.",
    "language.switcher": "Choisir la langue",
    "nav.features": "Fonctionnalités",
    "nav.gallery": "Captures",
    "nav.privacy": "Confidentialité",
    "hero.eyebrow": "RECHERCHE DE FICHIERS LOCALE",
    "hero.title": "Recherchez dans vos dossiers Mac avec vitesse, clarté et confidentialité.",
    "hero.description":
      "SearchFiles est une app de bureau macOS qui indexe les métadonnées des fichiers sur votre appareil, garde l'accès en lecture seule et vous aide à trouver documents, code et médias en quelques secondes.",
    "hero.downloadTop": "Télécharger sur le",
    "hero.downloadNote": "Ouvre le Mac App Store sur macOS, avec une page web de secours ailleurs.",
    "hero.primaryCta": "Voir les points forts",
    "hero.secondaryCta": "Lire la politique de confidentialité",
    "stats.local.label": "Index local des métadonnées",
    "stats.permission.value": "Lecture seule",
    "stats.permission.label": "Accès aux dossiers que vous choisissez",
    "stats.engine.label": "Moteur de recherche SQLite rapide",
    "hero.noteLocal.title": "Confidentialité intégrée",
    "hero.noteLocal.text": "L'index reste sur votre Mac.",
    "hero.noteSpeed.title": "Pensé pour la vitesse",
    "hero.noteSpeed.text": "Recherchez instantanément chemins, noms et métadonnées.",
    "features.eyebrow": "POURQUOI SEARCHFILES",
    "features.title": "Une recherche de bureau ciblée pour de vrais dossiers de travail",
    "features.description":
      "SearchFiles s'adresse aux personnes qui gèrent de grandes bibliothèques locales et ont besoin d'une recherche compréhensible, légère et privée.",
    "feature.one.title": "Importez uniquement les dossiers que vous choisissez",
    "feature.one.body":
      "L'app stocke des signets à portée sécurisée pour les dossiers sélectionnés, afin que vous gardiez le contrôle des emplacements indexés.",
    "feature.two.title": "Recherchez par nom, chemin et chemin relatif",
    "feature.two.body":
      "Trouvez le fichier voulu dans vos dossiers importés sans ouvrir plusieurs fenêtres Finder ni mémoriser l'emplacement exact.",
    "feature.three.title": "Filtrez efficacement quand votre bibliothèque grandit",
    "feature.three.body":
      "Réduisez les grands ensembles de résultats par dossier, taille de fichier et métadonnées indexées pour garder des résultats exploitables.",
    "feature.four.title": "Respectez les limites de vos fichiers",
    "feature.four.body":
      "SearchFiles indexe les métadonnées, pas le contenu des fichiers, et demande un accès en lecture seule aux dossiers que vous importez explicitement.",
    "gallery.eyebrow": "VISITE DU PRODUIT",
    "gallery.title": "Trois vues clés pour comprendre rapidement le produit",
    "gallery.description":
      "Les captures ci-dessous montrent l'import de dossiers, le filtrage par taille et la recherche de code dans de vrais dossiers de projet.",
    "gallery.one.tag": "Aperçu",
    "gallery.one.title": "Commencez avec des dossiers importés que vous connaissez",
    "gallery.one.body":
      "Une barre latérale claire garde les emplacements importés visibles, tandis que l'espace principal reste centré sur la recherche et les résultats.",
    "gallery.two.tag": "Filtre",
    "gallery.two.title": "Trouvez les gros fichiers avec un filtrage rapide des métadonnées",
    "gallery.two.body":
      "Le filtre de taille intégré aide à repérer vidéos, archives ou ressources de projet volumineuses sans configuration supplémentaire.",
    "gallery.three.tag": "Recherche de code",
    "gallery.three.title": "Recherchez dans de grands dossiers de développement sans perdre le contexte",
    "gallery.three.body":
      "Les développeurs peuvent parcourir les arborescences par nom de fichier et chemin, puis affiner les résultats dans un dossier choisi.",
    "usecases.eyebrow": "POUR QUI",
    "usecases.title": "Conçu pour celles et ceux qui veulent une recherche fiable",
    "usecases.one": "Développeurs qui explorent des projets",
    "usecases.two": "Chercheurs qui organisent de grandes archives",
    "usecases.three": "Créateurs qui retrouvent des médias lourds",
    "usecases.four": "Toute personne qui veut une recherche locale",
    "privacy.eyebrow": "POLITIQUE DE CONFIDENTIALITÉ",
    "privacy.title": "Règles simples : traitement local, autorisations explicites, aucun suivi silencieux",
    "privacy.subtitle":
      "Dernière mise à jour : 11 avril 2026. Cette politique décrit comment SearchFiles traite les informations lorsque vous utilisez l'app et ce site.",
    "privacy.highlight.one.title": "Aucun SDK d'analyse ni traceur publicitaire",
    "privacy.highlight.one.body":
      "SearchFiles n'utilise pas d'analyse tierce, de réseau publicitaire ni de suivi comportemental dans l'app.",
    "privacy.highlight.two.title": "L'accès aux dossiers est choisi par vous et en lecture seule",
    "privacy.highlight.two.body":
      "L'app vous demande de choisir des dossiers, puis utilise un accès sécurisé par le sandbox et en lecture seule pour indexer les métadonnées.",
    "privacy.highlight.three.title": "Les données indexées restent sur votre appareil",
    "privacy.highlight.three.body":
      "Les métadonnées et signets de dossiers sont stockés localement dans le sandbox de l'app et ne sont pas envoyés au développeur par défaut.",
    "policy.one.title": "1. Informations traitées par l'app",
    "policy.one.body":
      "SearchFiles peut traiter les noms de dossiers, noms de fichiers, chemins, chemins relatifs, extensions, tailles de fichiers et dates de création ou de modification des dossiers importés. L'app stocke aussi des signets propres à l'app pour rouvrir plus tard les dossiers approuvés.",
    "policy.two.title": "2. Ce que l'app ne collecte pas",
    "policy.two.body":
      "SearchFiles est actuellement conçu autour de l'indexation des métadonnées. Il ne lit pas intentionnellement le contenu des fichiers pour la recherche, n'intègre pas d'identifiants publicitaires et n'envoie pas votre index à un serveur distant pendant l'utilisation normale.",
    "policy.three.title": "3. Stockage des données",
    "policy.three.body":
      "Les métadonnées indexées sont stockées localement sur votre Mac, généralement dans le dossier Application Support de l'app et son conteneur sandbox. Vous pouvez retirer des dossiers importés ou supprimer les données locales de l'app sur votre appareil.",
    "policy.four.title": "4. Autorisations et limites d'accès",
    "policy.four.body":
      "L'app utilise macOS App Sandbox et des signets à portée sécurisée. L'accès aux dossiers est limité aux emplacements que vous sélectionnez explicitement, avec un droit actuel en lecture seule.",
    "policy.five.title": "5. Données traitées par le site",
    "policy.five.body":
      "Ce site est une page produit statique. Dans cette version du dépôt, il ne contient ni formulaires personnalisés, ni comptes, ni code d'analyse intégré. Votre navigateur peut toutefois effectuer les requêtes standard nécessaires au chargement du site et des polices web.",
    "policy.six.title": "6. Contact",
    "policy.six.body": "Pour toute question sur la confidentialité ou le produit, contactez l'éditeur via le profil GitHub :",
    "footer.description":
      "Une app macOS de recherche de fichiers locale, centrée sur la recherche rapide de métadonnées et des limites de confidentialité transparentes.",
    "footer.product": "Produit",
    "footer.privacy": "Confidentialité",
    "footer.meta": "SearchFiles. Publié avec GitHub Pages."
  },
  de: {
    ...sharedCopy,
    pageTitle: "SearchFiles | Lokale Dateisuche für macOS",
    pageDescription:
      "SearchFiles ist eine mehrsprachige Produktseite für eine datenschutzorientierte macOS-App zur Dateisuche mit schneller lokaler Indexierung, sofortiger Suche und klarer Datenverarbeitung.",
    "language.switcher": "Sprache wählen",
    "nav.features": "Funktionen",
    "nav.gallery": "Ansichten",
    "nav.privacy": "Datenschutz",
    "hero.eyebrow": "LOKALE DATEISUCHE",
    "hero.title": "Durchsuche deine Mac-Ordner mit Tempo, Übersicht und Datenschutz.",
    "hero.description":
      "SearchFiles ist eine macOS-Desktop-App, die Dateimetadaten auf deinem Gerät indexiert, nur lesenden Zugriff nutzt und Dokumente, Code und Medien in Sekunden findet.",
    "hero.downloadTop": "Laden im",
    "hero.downloadNote": "Öffnet unter macOS den Mac App Store, sonst eine Web-Vorschauseite.",
    "hero.primaryCta": "Produkthighlights ansehen",
    "hero.secondaryCta": "Datenschutz lesen",
    "stats.local.label": "Lokaler Metadatenindex",
    "stats.permission.value": "Nur lesen",
    "stats.permission.label": "Zugriff auf ausgewählte Ordner",
    "stats.engine.label": "Schnelle SQLite-Suche",
    "hero.noteLocal.title": "Privat konzipiert",
    "hero.noteLocal.text": "Der Index bleibt auf deinem Mac.",
    "hero.noteSpeed.title": "Für Tempo gebaut",
    "hero.noteSpeed.text": "Suche Pfade, Namen und Metadaten sofort.",
    "features.eyebrow": "WARUM SEARCHFILES",
    "features.title": "Eine fokussierte Desktop-Suche für echte Arbeitsordner",
    "features.description":
      "SearchFiles ist für Menschen gedacht, die große lokale Sammlungen verwalten und eine verständliche, leichte und private Suche brauchen.",
    "feature.one.title": "Importiere nur Ordner, die du auswählst",
    "feature.one.body":
      "Die App speichert sicherheitsbezogene Bookmarks für ausgewählte Ordner, damit du kontrollierst, welche Orte indexiert werden.",
    "feature.two.title": "Suche nach Name, Pfad und relativem Pfad",
    "feature.two.body":
      "Finde Dateien in importierten Ordnern, ohne Finder-Fenster zu öffnen oder genaue Speicherorte zu kennen.",
    "feature.three.title": "Intelligent filtern, während deine Sammlung wächst",
    "feature.three.body":
      "Grenze große Ergebnismengen nach Ordner, Dateigröße und indexierten Metadaten ein, damit Treffer nutzbar bleiben.",
    "feature.four.title": "Respektiere die Grenzen deiner Dateien",
    "feature.four.body":
      "SearchFiles indexiert Metadaten, nicht Dateiinhalte, und fordert nur Lesezugriff auf Ordner an, die du ausdrücklich importierst.",
    "gallery.eyebrow": "PRODUKTRUNDGANG",
    "gallery.title": "Drei zentrale Ansichten erklären das Produkt schnell",
    "gallery.description":
      "Die Screenshots zeigen den Importablauf, größenbasiertes Filtern und breite Codesuche in echten Projektordnern.",
    "gallery.one.tag": "Übersicht",
    "gallery.one.title": "Beginne mit importierten Ordnern, denen du vertraust",
    "gallery.one.body":
      "Eine klare Seitenleiste hält importierte Orte sichtbar, während der Arbeitsbereich auf Suche und Ergebnisse fokussiert bleibt.",
    "gallery.two.tag": "Filter",
    "gallery.two.title": "Finde große Dateien mit schneller Metadatenfilterung",
    "gallery.two.body":
      "Der integrierte Größenfilter hilft, große Videos, Archive oder Projektdateien ohne zusätzliche Einrichtung zu finden.",
    "gallery.three.tag": "Codesuche",
    "gallery.three.title": "Durchsuche große Entwicklungsordner ohne Kontextverlust",
    "gallery.three.body":
      "Entwickler können Projektbäume nach Dateiname und Pfad durchsuchen und Treffer anschließend auf einen Ordner eingrenzen.",
    "usecases.eyebrow": "FÜR WEN",
    "usecases.title": "Gebaut für Menschen, die verlässliche Dateisuche brauchen",
    "usecases.one": "Entwickler, die Projektbäume durchsuchen",
    "usecases.two": "Forschende, die große Archive ordnen",
    "usecases.three": "Kreative, die große Mediendateien finden",
    "usecases.four": "Alle, die lokale Suche bevorzugen",
    "privacy.eyebrow": "DATENSCHUTZERKLÄRUNG",
    "privacy.title": "Einfache Regeln: lokale Verarbeitung, klare Berechtigungen, kein stilles Tracking",
    "privacy.subtitle":
      "Zuletzt aktualisiert: 11. April 2026. Diese Erklärung beschreibt, wie SearchFiles Informationen verarbeitet, wenn du die App und diese Website nutzt.",
    "privacy.highlight.one.title": "Keine Analyse-SDKs oder Werbetracker",
    "privacy.highlight.one.body":
      "SearchFiles verwendet in der App keine Drittanbieter-Analysen, Werbenetzwerke oder Verhaltensverfolgung.",
    "privacy.highlight.two.title": "Ordnerzugriff ist ausgewählt und nur lesend",
    "privacy.highlight.two.body":
      "Die App lässt dich Ordner auswählen und nutzt dann sandbox-sicheren, nur lesenden Zugriff, um Metadaten dieser Orte zu indexieren.",
    "privacy.highlight.three.title": "Indexdaten bleiben auf deinem Gerät",
    "privacy.highlight.three.body":
      "Metadaten und Ordner-Bookmarks werden lokal in der App-Sandbox gespeichert und standardmäßig nicht an den Entwickler hochgeladen.",
    "policy.one.title": "1. Informationen, die die App verarbeitet",
    "policy.one.body":
      "SearchFiles kann für importierte Ordner Ordnernamen, Dateinamen, Pfade, relative Pfade, Erweiterungen, Dateigrößen sowie Erstellungs- oder Änderungsdaten verarbeiten. Außerdem speichert die App app-bezogene Bookmarks, damit genehmigte Ordner später erneut geöffnet werden können.",
    "policy.two.title": "2. Was die App nicht sammelt",
    "policy.two.body":
      "SearchFiles ist derzeit auf Metadatenindexierung ausgelegt. Die App liest Dateiinhalte nicht absichtlich für die Suche, bettet keine Werbe-IDs ein und sendet deinen Index bei normaler Nutzung nicht an einen Remote-Server.",
    "policy.three.title": "3. Wie Daten gespeichert werden",
    "policy.three.body":
      "Indexierte Metadaten werden lokal auf deinem Mac gespeichert, normalerweise im Application-Support-Ordner der App und im Sandbox-Container. Du kannst importierte Ordner entfernen oder lokale App-Daten auf deinem Gerät löschen.",
    "policy.four.title": "4. Berechtigungen und Zugriffsgrenzen",
    "policy.four.body":
      "Die App nutzt macOS App Sandbox und sicherheitsbezogene Bookmarks. Ordnerzugriff ist auf Orte beschränkt, die du ausdrücklich auswählst, und die aktuelle Berechtigung ist nur lesend.",
    "policy.five.title": "5. Datenverarbeitung der Website",
    "policy.five.body":
      "Diese Website ist eine statische Produktseite. In der aktuellen Repository-Version enthält sie keine eigenen Formulare, Konten oder eingebettete Analysecodes. Dein Browser kann weiterhin Standardanfragen senden, die zum Laden der Website und Webfonts nötig sind.",
    "policy.six.title": "6. Kontakt",
    "policy.six.body": "Bei Datenschutz- oder Produktfragen kontaktiere den Herausgeber über das GitHub-Profil:",
    "footer.description":
      "Eine lokale macOS-Dateisuch-App mit Fokus auf schnelle Metadatensuche und transparente Datenschutzgrenzen.",
    "footer.product": "Produkt",
    "footer.privacy": "Datenschutz",
    "footer.meta": "SearchFiles. Veröffentlicht mit GitHub Pages."
  },
  ja: {
    ...sharedCopy,
    pageTitle: "SearchFiles | macOS 向けローカル優先ファイル検索",
    pageDescription:
      "SearchFiles は、プライバシー重視の macOS ファイル検索アプリを紹介する多言語プロダクトページです。高速なローカルインデックス、即時検索、明確なデータ扱いを伝えます。",
    "language.switcher": "言語を選択",
    "nav.features": "機能",
    "nav.gallery": "画面",
    "nav.privacy": "プライバシー",
    "hero.eyebrow": "ローカル優先のファイル検索",
    "hero.title": "Mac のフォルダを、速く、見やすく、安心して検索。",
    "hero.description":
      "SearchFiles は macOS 用デスクトップアプリです。ファイルのメタデータを端末上でインデックスし、読み取り専用アクセスで、書類、コード、メディアを数秒で見つけます。",
    "hero.downloadTop": "入手先",
    "hero.downloadNote": "macOS では Mac App Store を開き、それ以外では Web ページに切り替えます。",
    "hero.primaryCta": "製品の見どころを見る",
    "hero.secondaryCta": "プライバシーポリシーを読む",
    "stats.local.label": "ローカルメタデータ索引",
    "stats.permission.value": "読み取り専用",
    "stats.permission.label": "ユーザーが選んだフォルダへのアクセス",
    "stats.engine.label": "高速な SQLite 検索エンジン",
    "hero.noteLocal.title": "プライバシーを前提に設計",
    "hero.noteLocal.text": "インデックスは Mac に残ります。",
    "hero.noteSpeed.title": "速度のために構築",
    "hero.noteSpeed.text": "パス、名前、メタデータを即座に検索。",
    "features.eyebrow": "SEARCHFILES を選ぶ理由",
    "features.title": "実際の作業フォルダに向けた集中できるデスクトップ検索",
    "features.description":
      "SearchFiles は、大量のローカルファイルを扱う人のために、理解しやすく軽量でプライベートな検索を提供します。",
    "feature.one.title": "選んだフォルダだけをインポート",
    "feature.one.body":
      "アプリはユーザーが選択したフォルダのセキュリティスコープ付きブックマークを保存し、どの場所をインデックスするかを管理できます。",
    "feature.two.title": "名前、パス、相対パスで検索",
    "feature.two.body":
      "Finder ウィンドウを開き回ったり正確な場所を覚えたりしなくても、インポート済みフォルダから目的のファイルを見つけられます。",
    "feature.three.title": "ライブラリが増えても賢く絞り込み",
    "feature.three.body":
      "フォルダ範囲、ファイルサイズ、インデックス済みメタデータで大きな結果セットを絞り込み、扱いやすい結果にできます。",
    "feature.four.title": "ファイルの境界を尊重",
    "feature.four.body":
      "SearchFiles はファイル内容ではなくメタデータをインデックスし、明示的にインポートしたフォルダへの読み取り専用アクセスだけを求めます。",
    "gallery.eyebrow": "製品ツアー",
    "gallery.title": "製品をすばやく理解できる 3 つの画面",
    "gallery.description":
      "下のスクリーンショットでは、インポート操作、サイズによる絞り込み、実際のプロジェクトフォルダ内でのコード検索を示しています。",
    "gallery.one.tag": "概要",
    "gallery.one.title": "信頼しているインポート済みフォルダから開始",
    "gallery.one.body":
      "すっきりしたサイドバーでインポート済みの場所を見失わず、メイン領域は検索と結果に集中できます。",
    "gallery.two.tag": "フィルター",
    "gallery.two.title": "高速なメタデータ絞り込みで大きなファイルを発見",
    "gallery.two.body":
      "内蔵のファイルサイズフィルターにより、動画、アーカイブ、プロジェクト素材などの大容量ファイルを追加設定なしで見つけられます。",
    "gallery.three.tag": "コード検索",
    "gallery.three.title": "大きな開発フォルダでも文脈を保って検索",
    "gallery.three.body":
      "開発者はファイル名とパスでプロジェクトツリーをすばやく確認し、選択したフォルダ内に結果を絞り込めます。",
    "usecases.eyebrow": "役立つ人",
    "usecases.title": "信頼できるファイル検索を必要とする人のために設計",
    "usecases.one": "プロジェクトツリーを検索する開発者",
    "usecases.two": "大きなアーカイブを整理する研究者",
    "usecases.three": "重いメディアファイルを探すクリエイター",
    "usecases.four": "ローカル優先の検索を望むすべての人",
    "privacy.eyebrow": "プライバシーポリシー",
    "privacy.title": "シンプルな原則：ローカル処理、明示的な権限、見えない追跡なし",
    "privacy.subtitle":
      "最終更新日：2026 年 4 月 11 日。このポリシーは、アプリとこの Web サイトの利用時に SearchFiles が情報をどう扱うかを説明します。",
    "privacy.highlight.one.title": "分析 SDK や広告トラッカーは不使用",
    "privacy.highlight.one.body":
      "SearchFiles はアプリ内で第三者分析、広告ネットワーク、行動追跡ツールを使用しません。",
    "privacy.highlight.two.title": "フォルダアクセスはユーザー選択かつ読み取り専用",
    "privacy.highlight.two.body":
      "アプリはフォルダの選択を求め、その場所のメタデータをインデックスするために、サンドボックス上安全な読み取り専用アクセスを使用します。",
    "privacy.highlight.three.title": "インデックスデータは端末に残ります",
    "privacy.highlight.three.body":
      "メタデータとフォルダブックマークはアプリのサンドボックス内にローカル保存され、既定では開発者へアップロードされません。",
    "policy.one.title": "1. アプリが処理する情報",
    "policy.one.body":
      "インポートしたフォルダについて、SearchFiles はフォルダ名、ファイル名、パス、相対パス、拡張子、ファイルサイズ、作成日や変更日を処理する場合があります。また、承認済みフォルダを後で開けるように、アプリ用のブックマークを保存します。",
    "policy.two.title": "2. アプリが収集しないもの",
    "policy.two.body":
      "SearchFiles は現在、メタデータのインデックスを中心に設計されています。検索のためにファイル内容を意図的に読むことはなく、広告識別子を組み込まず、通常利用時にインデックスをリモートサーバーへ送信しません。",
    "policy.three.title": "3. データの保存方法",
    "policy.three.body":
      "インデックス済みメタデータは Mac 上にローカル保存され、通常はアプリの Application Support ディレクトリとサンドボックスコンテナ内にあります。インポート済みフォルダを削除したり、端末上のローカルアプリデータを削除したりできます。",
    "policy.four.title": "4. 権限とアクセス範囲",
    "policy.four.body":
      "アプリは macOS App Sandbox とセキュリティスコープ付きブックマークを使用します。フォルダアクセスは明示的に選択した場所に限定され、現在の entitlement は読み取り専用です。",
    "policy.five.title": "5. Web サイトでのデータ扱い",
    "policy.five.body":
      "この Web サイトは静的な製品ページです。現在のリポジトリ版には、独自フォーム、アカウント、埋め込み分析コードは含まれていません。ただし、ブラウザはサイトと Web フォントの読み込みに必要な標準リクエストを行う場合があります。",
    "policy.six.title": "6. 連絡先",
    "policy.six.body": "プライバシーまたは製品に関する質問は、GitHub プロフィールから公開者へお問い合わせください：",
    "footer.description":
      "高速なメタデータ検索と透明なプライバシー境界に重点を置いた、macOS 向けローカル優先ファイル検索アプリ。",
    "footer.product": "製品",
    "footer.privacy": "プライバシー",
    "footer.meta": "SearchFiles。GitHub Pages で公開。"
  },
  it: {
    ...sharedCopy,
    pageTitle: "SearchFiles | Ricerca file locale per macOS",
    pageDescription:
      "SearchFiles è una pagina prodotto multilingue per un'app macOS di ricerca file orientata alla privacy, con indicizzazione locale rapida, ricerca istantanea e gestione chiara dei dati.",
    "language.switcher": "Scegli lingua",
    "nav.features": "Funzioni",
    "nav.gallery": "Schermate",
    "nav.privacy": "Privacy",
    "hero.eyebrow": "RICERCA FILE LOCALE",
    "hero.title": "Cerca nelle cartelle del Mac con velocità, chiarezza e privacy.",
    "hero.description":
      "SearchFiles è un'app desktop per macOS che indicizza i metadati dei file sul dispositivo, mantiene l'accesso in sola lettura e ti aiuta a trovare documenti, codice e media in pochi secondi.",
    "hero.downloadTop": "Scarica dal",
    "hero.downloadNote": "Apre il Mac App Store su macOS, con fallback web altrove.",
    "hero.primaryCta": "Vedi i punti forti",
    "hero.secondaryCta": "Leggi la privacy policy",
    "stats.local.label": "Indice locale dei metadati",
    "stats.permission.value": "Sola lettura",
    "stats.permission.label": "Accesso alle cartelle scelte da te",
    "stats.engine.label": "Motore di ricerca SQLite veloce",
    "hero.noteLocal.title": "Privacy fin dal design",
    "hero.noteLocal.text": "L'indice resta sul tuo Mac.",
    "hero.noteSpeed.title": "Progettato per la velocità",
    "hero.noteSpeed.text": "Cerca percorsi, nomi e metadati all'istante.",
    "features.eyebrow": "PERCHÉ SEARCHFILES",
    "features.title": "Una ricerca desktop mirata per cartelle di lavoro reali",
    "features.description":
      "SearchFiles è pensato per chi lavora con grandi librerie locali e ha bisogno di una ricerca comprensibile, leggera e privata.",
    "feature.one.title": "Importa solo le cartelle che scegli",
    "feature.one.body":
      "L'app salva segnalibri con ambito di sicurezza per le cartelle selezionate, così mantieni il controllo sugli elementi indicizzati.",
    "feature.two.title": "Cerca per nome, percorso e percorso relativo",
    "feature.two.body":
      "Trova il file che vuoi nelle cartelle importate senza aprire finestre del Finder o ricordare posizioni esatte.",
    "feature.three.title": "Filtra in modo intelligente mentre la libreria cresce",
    "feature.three.body":
      "Restringi grandi insiemi di risultati per cartella, dimensione file e metadati indicizzati, mantenendo risultati utilizzabili.",
    "feature.four.title": "Rispetta i confini dei tuoi file",
    "feature.four.body":
      "SearchFiles indicizza i metadati, non il contenuto dei file, e richiede accesso in sola lettura alle cartelle che importi esplicitamente.",
    "gallery.eyebrow": "TOUR DEL PRODOTTO",
    "gallery.title": "Tre viste chiave per capire rapidamente il prodotto",
    "gallery.description":
      "Le schermate mostrano il flusso di importazione, il filtro per dimensione e la ricerca ampia nel codice dentro vere cartelle di progetto.",
    "gallery.one.tag": "Panoramica",
    "gallery.one.title": "Inizia dalle cartelle importate di cui ti fidi",
    "gallery.one.body":
      "Una barra laterale pulita mantiene visibili le posizioni importate, mentre l'area principale resta concentrata su ricerca e risultati.",
    "gallery.two.tag": "Filtro",
    "gallery.two.title": "Trova file grandi con un filtro metadati veloce",
    "gallery.two.body":
      "Il filtro integrato per dimensione aiuta a trovare video, archivi o risorse di progetto pesanti senza configurazioni extra.",
    "gallery.three.tag": "Ricerca codice",
    "gallery.three.title": "Cerca in grandi cartelle di sviluppo senza perdere contesto",
    "gallery.three.body":
      "Gli sviluppatori possono esaminare alberi di progetto per nome file e percorso, poi affinare i risultati in una cartella selezionata.",
    "usecases.eyebrow": "A CHI SERVE",
    "usecases.title": "Creato per chi ha bisogno di una ricerca file affidabile",
    "usecases.one": "Sviluppatori che cercano negli alberi di progetto",
    "usecases.two": "Ricercatori che organizzano grandi archivi",
    "usecases.three": "Creator che trovano file multimediali pesanti",
    "usecases.four": "Chiunque voglia una ricerca locale",
    "privacy.eyebrow": "INFORMATIVA SULLA PRIVACY",
    "privacy.title": "Regole semplici: elaborazione locale, permessi espliciti, nessun tracciamento silenzioso",
    "privacy.subtitle":
      "Ultimo aggiornamento: 11 aprile 2026. Questa informativa descrive come SearchFiles gestisce le informazioni quando usi l'app e questo sito.",
    "privacy.highlight.one.title": "Nessun SDK di analisi o tracker pubblicitario",
    "privacy.highlight.one.body":
      "SearchFiles non usa nell'app analisi di terze parti, reti pubblicitarie o strumenti di tracciamento comportamentale.",
    "privacy.highlight.two.title": "L'accesso alle cartelle è scelto da te e in sola lettura",
    "privacy.highlight.two.body":
      "L'app ti chiede di scegliere le cartelle e usa accesso sicuro nel sandbox, in sola lettura, per indicizzare i metadati da quelle posizioni.",
    "privacy.highlight.three.title": "I dati indicizzati restano sul dispositivo",
    "privacy.highlight.three.body":
      "Metadati e segnalibri delle cartelle sono salvati localmente nel sandbox dell'app e non vengono caricati allo sviluppatore per impostazione predefinita.",
    "policy.one.title": "1. Informazioni elaborate dall'app",
    "policy.one.body":
      "SearchFiles può elaborare nomi di cartelle, nomi file, percorsi, percorsi relativi, estensioni, dimensioni file e date di creazione o modifica per le cartelle importate. Salva anche segnalibri specifici dell'app per riaprire in seguito le cartelle approvate.",
    "policy.two.title": "2. Cosa non raccoglie l'app",
    "policy.two.body":
      "SearchFiles è attualmente progettato intorno all'indicizzazione dei metadati. Non legge intenzionalmente il contenuto dei file per la ricerca, non integra identificatori pubblicitari e non invia il tuo indice a un server remoto durante l'uso normale.",
    "policy.three.title": "3. Come vengono archiviati i dati",
    "policy.three.body":
      "I metadati indicizzati sono salvati localmente sul tuo Mac, di solito nella cartella Application Support dell'app e nel contenitore sandbox. Puoi rimuovere cartelle importate o eliminare i dati locali dell'app dal dispositivo.",
    "policy.four.title": "4. Permessi e limiti di accesso",
    "policy.four.body":
      "L'app usa macOS App Sandbox e segnalibri con ambito di sicurezza. L'accesso alle cartelle è limitato alle posizioni che selezioni esplicitamente e l'entitlement attuale è in sola lettura.",
    "policy.five.title": "5. Gestione dei dati del sito",
    "policy.five.body":
      "Questo sito è una pagina prodotto statica. Nella versione corrente del repository non include moduli personalizzati, account o codice di analisi incorporato. Il browser può comunque effettuare le richieste standard necessarie per caricare il sito e i font web.",
    "policy.six.title": "6. Contatto",
    "policy.six.body": "Per domande su privacy o prodotto, contatta l'autore tramite il profilo GitHub:",
    "footer.description":
      "Un'app macOS di ricerca file locale, focalizzata su ricerca rapida dei metadati e confini privacy trasparenti.",
    "footer.product": "Prodotto",
    "footer.privacy": "Privacy",
    "footer.meta": "SearchFiles. Pubblicato con GitHub Pages."
  },
  pt: {
    ...sharedCopy,
    pageTitle: "SearchFiles | Pesquisa local de arquivos para macOS",
    pageDescription:
      "SearchFiles é uma página de produto multilíngue para um app macOS de busca de arquivos com foco em privacidade, indexação local rápida, pesquisa instantânea e tratamento claro de dados.",
    "language.switcher": "Escolher idioma",
    "nav.features": "Recursos",
    "nav.gallery": "Telas",
    "nav.privacy": "Privacidade",
    "hero.eyebrow": "PESQUISA LOCAL DE ARQUIVOS",
    "hero.title": "Pesquise nas pastas do Mac com rapidez, clareza e privacidade.",
    "hero.description":
      "SearchFiles é um app desktop para macOS que indexa metadados de arquivos no seu dispositivo, mantém o acesso somente leitura e ajuda você a encontrar documentos, código e mídia em segundos.",
    "hero.downloadTop": "Baixar na",
    "hero.downloadNote": "Abre o Mac App Store no macOS, com fallback para web em outros dispositivos.",
    "hero.primaryCta": "Ver destaques do produto",
    "hero.secondaryCta": "Ler política de privacidade",
    "stats.local.label": "Índice local de metadados",
    "stats.permission.value": "Somente leitura",
    "stats.permission.label": "Acesso às pastas escolhidas por você",
    "stats.engine.label": "Mecanismo rápido de busca SQLite",
    "hero.noteLocal.title": "Privacidade desde o design",
    "hero.noteLocal.text": "O índice fica no seu Mac.",
    "hero.noteSpeed.title": "Feito para velocidade",
    "hero.noteSpeed.text": "Pesquise caminhos, nomes e metadados instantaneamente.",
    "features.eyebrow": "POR QUE SEARCHFILES",
    "features.title": "Uma experiência focada de busca desktop para pastas reais de trabalho",
    "features.description":
      "SearchFiles foi criado para quem trabalha com grandes bibliotecas locais e precisa de uma busca compreensível, leve e privada.",
    "feature.one.title": "Importe apenas as pastas que você escolher",
    "feature.one.body":
      "O app armazena marcadores com escopo de segurança para as pastas selecionadas, para que você controle quais locais são indexados.",
    "feature.two.title": "Pesquise por nome, caminho e caminho relativo",
    "feature.two.body":
      "Encontre o arquivo desejado nas pastas importadas sem abrir janelas do Finder nem lembrar locais exatos.",
    "feature.three.title": "Filtre de forma inteligente enquanto sua biblioteca cresce",
    "feature.three.body":
      "Reduza grandes conjuntos de resultados por pasta, tamanho de arquivo e metadados indexados para manter resultados acionáveis.",
    "feature.four.title": "Respeite os limites dos seus arquivos",
    "feature.four.body":
      "SearchFiles indexa metadados, não o conteúdo dos arquivos, e solicita acesso somente leitura às pastas que você importa explicitamente.",
    "gallery.eyebrow": "TOUR DO PRODUTO",
    "gallery.title": "Três telas principais para entender o produto rapidamente",
    "gallery.description":
      "As capturas abaixo mostram o fluxo de importação, o filtro por tamanho e a busca ampla em código dentro de pastas reais de projeto.",
    "gallery.one.tag": "Visão geral",
    "gallery.one.title": "Comece pelas pastas importadas em que você confia",
    "gallery.one.body":
      "Uma barra lateral limpa mantém os locais importados visíveis, enquanto a área principal fica focada em busca e resultados.",
    "gallery.two.tag": "Filtro",
    "gallery.two.title": "Localize arquivos grandes com filtragem rápida de metadados",
    "gallery.two.body":
      "O filtro integrado por tamanho ajuda a encontrar vídeos, arquivos compactados ou recursos de projeto pesados sem configuração extra.",
    "gallery.three.tag": "Busca em código",
    "gallery.three.title": "Pesquise em grandes pastas de desenvolvimento sem perder contexto",
    "gallery.three.body":
      "Desenvolvedores podem analisar árvores de projeto por nome e caminho, depois refinar resultados dentro de uma pasta selecionada.",
    "usecases.eyebrow": "PARA QUEM AJUDA",
    "usecases.title": "Criado para quem precisa confiar na busca de arquivos",
    "usecases.one": "Desenvolvedores pesquisando árvores de projeto",
    "usecases.two": "Pesquisadores organizando grandes arquivos",
    "usecases.three": "Criadores encontrando mídias pesadas",
    "usecases.four": "Qualquer pessoa que queira busca local",
    "privacy.eyebrow": "POLÍTICA DE PRIVACIDADE",
    "privacy.title": "Regras simples: processamento local, permissões explícitas e nenhum rastreamento silencioso",
    "privacy.subtitle":
      "Última atualização: 11 de abril de 2026. Esta política descreve como SearchFiles trata informações quando você usa o app e este site.",
    "privacy.highlight.one.title": "Sem SDKs de análise ou rastreadores de anúncios",
    "privacy.highlight.one.body":
      "SearchFiles não usa análises de terceiros, redes de anúncios ou rastreamento comportamental no app.",
    "privacy.highlight.two.title": "O acesso às pastas é escolhido por você e somente leitura",
    "privacy.highlight.two.body":
      "O app pede que você escolha pastas e usa acesso seguro no sandbox, somente leitura, para indexar metadados desses locais.",
    "privacy.highlight.three.title": "Os dados indexados ficam no seu dispositivo",
    "privacy.highlight.three.body":
      "Metadados e marcadores de pastas são armazenados localmente no sandbox do app e não são enviados ao desenvolvedor por padrão.",
    "policy.one.title": "1. Informações que o app processa",
    "policy.one.body":
      "SearchFiles pode processar nomes de pastas, nomes de arquivos, caminhos, caminhos relativos, extensões, tamanhos de arquivos e datas de criação ou modificação das pastas importadas. Ele também armazena marcadores do app para reabrir pastas aprovadas depois.",
    "policy.two.title": "2. O que o app não coleta",
    "policy.two.body":
      "SearchFiles atualmente é projetado em torno da indexação de metadados. Ele não lê intencionalmente o conteúdo dos arquivos para busca, não incorpora identificadores de publicidade e não envia seu índice a um servidor remoto durante o uso normal.",
    "policy.three.title": "3. Como os dados são armazenados",
    "policy.three.body":
      "Metadados indexados são armazenados localmente no seu Mac, normalmente no diretório Application Support do app e no contêiner sandbox. Você pode remover pastas importadas ou excluir dados locais do app no dispositivo.",
    "policy.four.title": "4. Permissões e limites de acesso",
    "policy.four.body":
      "O app usa macOS App Sandbox e marcadores com escopo de segurança. O acesso às pastas é limitado aos locais que você seleciona explicitamente, e o entitlement atual é somente leitura.",
    "policy.five.title": "5. Tratamento de dados do site",
    "policy.five.body":
      "Este site é uma página de produto estática. Na versão atual do repositório, ele não inclui formulários personalizados, contas ou código de análise incorporado. Seu navegador ainda pode fazer as solicitações padrão necessárias para carregar o site e as fontes web.",
    "policy.six.title": "6. Contato",
    "policy.six.body": "Para questões de privacidade ou produto, entre em contato com o publicador pelo perfil do GitHub:",
    "footer.description":
      "Um app macOS de busca local de arquivos focado em pesquisa rápida de metadados e limites transparentes de privacidade.",
    "footer.product": "Produto",
    "footer.privacy": "Privacidade",
    "footer.meta": "SearchFiles. Publicado com GitHub Pages."
  },
  es: {
    ...sharedCopy,
    pageTitle: "SearchFiles | Búsqueda local de archivos para macOS",
    pageDescription:
      "SearchFiles es una página de producto multilingüe para una app macOS de búsqueda de archivos centrada en la privacidad, con indexación local rápida, búsqueda instantánea y gestión clara de datos.",
    "language.switcher": "Elegir idioma",
    "nav.features": "Funciones",
    "nav.gallery": "Pantallas",
    "nav.privacy": "Privacidad",
    "hero.eyebrow": "BÚSQUEDA LOCAL DE ARCHIVOS",
    "hero.title": "Busca en tus carpetas del Mac con rapidez, claridad y privacidad.",
    "hero.description":
      "SearchFiles es una app de escritorio para macOS que indexa metadatos de archivos en tu dispositivo, mantiene acceso de solo lectura y te ayuda a encontrar documentos, código y medios en segundos.",
    "hero.downloadTop": "Descargar en",
    "hero.downloadNote": "Abre el Mac App Store en macOS, con una alternativa web en otros dispositivos.",
    "hero.primaryCta": "Ver puntos destacados",
    "hero.secondaryCta": "Leer política de privacidad",
    "stats.local.label": "Índice local de metadatos",
    "stats.permission.value": "Solo lectura",
    "stats.permission.label": "Acceso a carpetas elegidas por ti",
    "stats.engine.label": "Motor rápido de búsqueda SQLite",
    "hero.noteLocal.title": "Privacidad desde el diseño",
    "hero.noteLocal.text": "El índice permanece en tu Mac.",
    "hero.noteSpeed.title": "Creado para la velocidad",
    "hero.noteSpeed.text": "Busca rutas, nombres y metadatos al instante.",
    "features.eyebrow": "POR QUÉ SEARCHFILES",
    "features.title": "Una experiencia de búsqueda de escritorio enfocada para carpetas reales",
    "features.description":
      "SearchFiles está diseñado para personas que trabajan con grandes bibliotecas locales y necesitan una búsqueda comprensible, ligera y privada.",
    "feature.one.title": "Importa solo las carpetas que elijas",
    "feature.one.body":
      "La app guarda marcadores con alcance de seguridad para carpetas seleccionadas, para que controles qué ubicaciones se indexan.",
    "feature.two.title": "Busca por nombre, ruta y ruta relativa",
    "feature.two.body":
      "Encuentra el archivo que quieres en carpetas importadas sin abrir ventanas del Finder ni recordar ubicaciones exactas.",
    "feature.three.title": "Filtra con inteligencia a medida que crece tu biblioteca",
    "feature.three.body":
      "Reduce grandes conjuntos de resultados por carpeta, tamaño de archivo y metadatos indexados para mantener resultados útiles.",
    "feature.four.title": "Respeta los límites de tus archivos",
    "feature.four.body":
      "SearchFiles indexa metadatos, no el contenido de los archivos, y solicita acceso de solo lectura a las carpetas que importas explícitamente.",
    "gallery.eyebrow": "RECORRIDO DEL PRODUCTO",
    "gallery.title": "Tres vistas clave para entender el producto rápidamente",
    "gallery.description":
      "Las capturas muestran el flujo de importación, el filtrado por tamaño y la búsqueda amplia de código dentro de carpetas reales de proyecto.",
    "gallery.one.tag": "Vista general",
    "gallery.one.title": "Empieza con carpetas importadas en las que ya confías",
    "gallery.one.body":
      "Una barra lateral limpia mantiene visibles las ubicaciones importadas, mientras el área principal se centra en la búsqueda y los resultados.",
    "gallery.two.tag": "Filtro",
    "gallery.two.title": "Localiza archivos grandes con filtrado rápido de metadatos",
    "gallery.two.body":
      "El filtro integrado por tamaño ayuda a encontrar videos, archivos comprimidos o recursos de proyecto pesados sin configuración extra.",
    "gallery.three.tag": "Búsqueda de código",
    "gallery.three.title": "Busca en grandes carpetas de desarrollo sin perder contexto",
    "gallery.three.body":
      "Los desarrolladores pueden revisar árboles de proyecto por nombre de archivo y ruta, y luego afinar resultados dentro de una carpeta seleccionada.",
    "usecases.eyebrow": "A QUIÉN AYUDA",
    "usecases.title": "Creado para quienes necesitan una búsqueda de archivos fiable",
    "usecases.one": "Desarrolladores que buscan en árboles de proyecto",
    "usecases.two": "Investigadores que organizan grandes archivos",
    "usecases.three": "Creadores que encuentran medios pesados",
    "usecases.four": "Cualquiera que quiera búsqueda local",
    "privacy.eyebrow": "POLÍTICA DE PRIVACIDAD",
    "privacy.title": "Reglas simples: procesamiento local, permisos explícitos y sin seguimiento silencioso",
    "privacy.subtitle":
      "Última actualización: 11 de abril de 2026. Esta política describe cómo SearchFiles gestiona información cuando usas la app y este sitio.",
    "privacy.highlight.one.title": "Sin SDKs de análisis ni rastreadores publicitarios",
    "privacy.highlight.one.body":
      "SearchFiles no usa análisis de terceros, redes publicitarias ni seguimiento de comportamiento en la app.",
    "privacy.highlight.two.title": "El acceso a carpetas lo eliges tú y es de solo lectura",
    "privacy.highlight.two.body":
      "La app te pide elegir carpetas y luego usa acceso seguro en sandbox, de solo lectura, para indexar metadatos de esas ubicaciones.",
    "privacy.highlight.three.title": "Los datos indexados permanecen en tu dispositivo",
    "privacy.highlight.three.body":
      "Los metadatos y marcadores de carpetas se almacenan localmente en el sandbox de la app y no se suben al desarrollador por defecto.",
    "policy.one.title": "1. Información que procesa la app",
    "policy.one.body":
      "SearchFiles puede procesar nombres de carpetas, nombres de archivos, rutas, rutas relativas, extensiones, tamaños de archivo y fechas de creación o modificación de las carpetas que importas. También guarda marcadores propios de la app para volver a abrir carpetas aprobadas más tarde.",
    "policy.two.title": "2. Lo que la app no recopila",
    "policy.two.body":
      "SearchFiles está diseñado actualmente en torno a la indexación de metadatos. No lee intencionalmente el contenido de archivos para la búsqueda, no incorpora identificadores publicitarios y no envía tu índice a un servidor remoto durante el uso normal.",
    "policy.three.title": "3. Cómo se almacenan los datos",
    "policy.three.body":
      "Los metadatos indexados se almacenan localmente en tu Mac, normalmente dentro del directorio Application Support de la app y su contenedor sandbox. Puedes quitar carpetas importadas o eliminar datos locales de la app desde tu dispositivo.",
    "policy.four.title": "4. Permisos y límites de acceso",
    "policy.four.body":
      "La app usa macOS App Sandbox y marcadores con alcance de seguridad. El acceso a carpetas se limita a ubicaciones que seleccionas explícitamente, y el entitlement actual es de solo lectura.",
    "policy.five.title": "5. Gestión de datos del sitio web",
    "policy.five.body":
      "Este sitio web es una página de producto estática. En la versión actual del repositorio no incluye formularios personalizados, cuentas ni código de análisis integrado. Tu navegador puede realizar solicitudes estándar necesarias para cargar el sitio y las fuentes web.",
    "policy.six.title": "6. Contacto",
    "policy.six.body": "Para preguntas de privacidad o producto, contacta al editor a través del perfil de GitHub:",
    "footer.description":
      "Una app macOS de búsqueda local de archivos centrada en búsqueda rápida de metadatos y límites de privacidad transparentes.",
    "footer.product": "Producto",
    "footer.privacy": "Privacidad",
    "footer.meta": "SearchFiles. Publicado con GitHub Pages."
  },
  ko: {
    ...sharedCopy,
    pageTitle: "SearchFiles | macOS용 로컬 우선 파일 검색",
    pageDescription:
      "SearchFiles는 빠른 로컬 인덱싱, 즉시 검색, 명확한 데이터 처리를 갖춘 개인정보 중심 macOS 파일 검색 앱을 소개하는 다국어 제품 페이지입니다.",
    "language.switcher": "언어 선택",
    "nav.features": "기능",
    "nav.gallery": "화면",
    "nav.privacy": "개인정보",
    "hero.eyebrow": "로컬 우선 파일 검색",
    "hero.title": "Mac 폴더를 빠르고 명확하며 안전하게 검색하세요.",
    "hero.description":
      "SearchFiles는 macOS 데스크톱 앱으로, 파일 메타데이터를 기기에서 인덱싱하고 읽기 전용 접근을 유지하며 문서, 코드, 미디어를 몇 초 안에 찾도록 돕습니다.",
    "hero.downloadTop": "다운로드",
    "hero.downloadNote": "macOS에서는 Mac App Store를 열고, 다른 기기에서는 웹 페이지로 전환합니다.",
    "hero.primaryCta": "제품 하이라이트 보기",
    "hero.secondaryCta": "개인정보 처리방침 읽기",
    "stats.local.label": "로컬 메타데이터 인덱스",
    "stats.permission.value": "읽기 전용",
    "stats.permission.label": "사용자가 선택한 폴더 접근",
    "stats.engine.label": "빠른 SQLite 검색 엔진",
    "hero.noteLocal.title": "개인정보 중심 설계",
    "hero.noteLocal.text": "인덱스는 Mac에 남습니다.",
    "hero.noteSpeed.title": "속도를 위해 제작",
    "hero.noteSpeed.text": "경로, 이름, 메타데이터를 즉시 검색합니다.",
    "features.eyebrow": "SEARCHFILES를 선택하는 이유",
    "features.title": "실제 작업 폴더를 위한 집중형 데스크톱 검색 경험",
    "features.description":
      "SearchFiles는 대규모 로컬 라이브러리를 다루며 이해하기 쉽고 가볍고 개인적인 검색이 필요한 사람을 위해 설계되었습니다.",
    "feature.one.title": "선택한 폴더만 가져오기",
    "feature.one.body":
      "앱은 사용자가 선택한 폴더에 대한 보안 범위 북마크를 저장하므로 어떤 위치가 인덱싱되는지 계속 제어할 수 있습니다.",
    "feature.two.title": "이름, 경로, 상대 경로로 검색",
    "feature.two.body":
      "Finder 창을 열거나 정확한 위치를 기억하지 않아도 가져온 폴더 전체에서 원하는 파일을 찾을 수 있습니다.",
    "feature.three.title": "라이브러리가 커져도 똑똑하게 필터링",
    "feature.three.body":
      "폴더 범위, 파일 크기, 인덱싱된 메타데이터로 큰 결과 목록을 좁혀 실행 가능한 결과를 유지합니다.",
    "feature.four.title": "파일의 경계를 존중",
    "feature.four.body":
      "SearchFiles는 파일 내용이 아닌 메타데이터를 인덱싱하며, 명시적으로 가져온 폴더에 대해서만 읽기 전용 접근을 요청합니다.",
    "gallery.eyebrow": "제품 둘러보기",
    "gallery.title": "제품을 빠르게 이해하는 세 가지 핵심 화면",
    "gallery.description":
      "아래 스크린샷은 가져오기 흐름, 크기 기반 필터링, 실제 프로젝트 폴더 안에서의 넓은 코드 검색을 보여줍니다.",
    "gallery.one.tag": "개요",
    "gallery.one.title": "이미 신뢰하는 가져온 폴더에서 시작",
    "gallery.one.body":
      "깔끔한 사이드바는 가져온 위치를 계속 보여주고, 메인 작업 영역은 검색과 결과에 집중합니다.",
    "gallery.two.tag": "필터",
    "gallery.two.title": "빠른 메타데이터 필터로 큰 파일 찾기",
    "gallery.two.body":
      "내장 파일 크기 필터는 추가 설정 없이 큰 동영상, 압축 파일, 프로젝트 자산을 찾는 데 도움이 됩니다.",
    "gallery.three.tag": "코드 검색",
    "gallery.three.title": "대규모 개발 폴더에서도 맥락을 잃지 않고 검색",
    "gallery.three.body":
      "개발자는 파일 이름과 경로로 프로젝트 트리를 빠르게 훑고, 선택한 폴더 안에서 결과를 더 좁힐 수 있습니다.",
    "usecases.eyebrow": "도움이 되는 사람",
    "usecases.title": "신뢰할 수 있는 파일 검색이 필요한 사람을 위해 제작",
    "usecases.one": "프로젝트 트리를 검색하는 개발자",
    "usecases.two": "대규모 아카이브를 정리하는 연구자",
    "usecases.three": "큰 미디어 파일을 찾는 크리에이터",
    "usecases.four": "로컬 우선 검색을 원하는 모든 사람",
    "privacy.eyebrow": "개인정보 처리방침",
    "privacy.title": "간단한 원칙: 로컬 처리, 명시적 권한, 조용한 추적 없음",
    "privacy.subtitle":
      "최종 업데이트: 2026년 4월 11일. 이 정책은 앱과 이 웹사이트를 사용할 때 SearchFiles가 정보를 처리하는 방식을 설명합니다.",
    "privacy.highlight.one.title": "분석 SDK 또는 광고 추적기 없음",
    "privacy.highlight.one.body":
      "SearchFiles는 앱에서 타사 분석, 광고 네트워크 또는 행동 추적 도구를 사용하지 않습니다.",
    "privacy.highlight.two.title": "폴더 접근은 사용자가 선택하며 읽기 전용입니다",
    "privacy.highlight.two.body":
      "앱은 사용자가 폴더를 선택하도록 요청한 뒤, 해당 위치의 메타데이터를 인덱싱하기 위해 샌드박스에서 안전한 읽기 전용 접근을 사용합니다.",
    "privacy.highlight.three.title": "인덱싱된 데이터는 기기에 남습니다",
    "privacy.highlight.three.body":
      "메타데이터와 폴더 북마크는 앱 샌드박스에 로컬로 저장되며 기본적으로 개발자에게 업로드되지 않습니다.",
    "policy.one.title": "1. 앱이 처리하는 정보",
    "policy.one.body":
      "SearchFiles는 가져온 폴더의 폴더 이름, 파일 이름, 경로, 상대 경로, 확장자, 파일 크기, 생성 또는 수정 날짜를 처리할 수 있습니다. 또한 승인된 폴더를 나중에 다시 열 수 있도록 앱 범위 북마크를 저장합니다.",
    "policy.two.title": "2. 앱이 수집하지 않는 것",
    "policy.two.body":
      "SearchFiles는 현재 메타데이터 인덱싱을 중심으로 설계되어 있습니다. 검색을 위해 파일 내용을 의도적으로 읽지 않고, 광고 식별자를 포함하지 않으며, 일반적인 사용 중에 인덱스를 원격 서버로 보내지 않습니다.",
    "policy.three.title": "3. 데이터 저장 방식",
    "policy.three.body":
      "인덱싱된 메타데이터는 Mac에 로컬로 저장되며, 일반적으로 앱의 Application Support 디렉터리와 샌드박스 컨테이너 안에 있습니다. 가져온 폴더를 제거하거나 기기에서 로컬 앱 데이터를 삭제할 수 있습니다.",
    "policy.four.title": "4. 권한과 접근 범위",
    "policy.four.body":
      "앱은 macOS App Sandbox와 보안 범위 북마크를 사용합니다. 폴더 접근은 사용자가 명시적으로 선택한 위치로 제한되며, 현재 entitlement는 읽기 전용입니다.",
    "policy.five.title": "5. 웹사이트 데이터 처리",
    "policy.five.body":
      "이 웹사이트는 정적 제품 페이지입니다. 현재 저장소 버전에는 사용자 지정 양식, 계정 시스템, 임베드된 분석 코드가 없습니다. 브라우저는 사이트와 웹 폰트를 로드하는 데 필요한 표준 요청을 보낼 수 있습니다.",
    "policy.six.title": "6. 연락처",
    "policy.six.body": "개인정보 또는 제품 관련 질문은 GitHub 프로필을 통해 게시자에게 문의하세요:",
    "footer.description":
      "빠른 메타데이터 검색과 투명한 개인정보 경계에 집중한 macOS용 로컬 우선 파일 검색 앱입니다.",
    "footer.product": "제품",
    "footer.privacy": "개인정보",
    "footer.meta": "SearchFiles. GitHub Pages로 게시됨."
  }
};

const version11Copy = {
  "zh-Hans": {
    pageDescription:
      "SearchFiles 1.1 是一款重视隐私的 macOS 文件搜索应用，支持本地元数据索引、高级搜索、排除子目录、保存搜索和清晰的设置管理。",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "用高级搜索、保存搜索和本地索引，更快找到 Mac 文件。",
    "hero.description":
      "SearchFiles 现在可以组合关键词、目录、扩展名、文件大小、创建日期和修改日期筛选结果，也能排除草稿、缓存或构建输出等子目录，同时保持元数据索引在本机处理。",
    "stats.local.value": "元数据",
    "stats.local.label": "文件名、路径、大小、日期与扩展名",
    "stats.permission.value": "只读",
    "stats.permission.label": "明确授权的 macOS 文件夹访问",
    "stats.engine.value": "1.1",
    "stats.engine.label": "高级筛选、排除子目录、保存搜索",
    "hero.noteLocal.title": "只索引元数据",
    "hero.noteLocal.text": "不读取或索引文件内容。",
    "hero.noteSpeed.title": "为重复搜索提速",
    "hero.noteSpeed.text": "常用查询可以保存在侧边栏。",
    "features.eyebrow": "1.1 新功能",
    "features.title": "从简单搜索升级为可保存、可排除、可精细筛选的工作流",
    "features.description":
      "最近两天的 app 改动围绕真实文件库的日常搜索展开：更精确的筛选、更少噪音，以及更清楚的本地设置。",
    "feature.one.title": "高级搜索组合多个条件",
    "feature.one.body":
      "按关键词、导入目录、扩展名、文件大小、创建日期和修改日期一起筛选，适合面对大型项目目录或资料归档。",
    "feature.two.title": "排除不想看到的子目录",
    "feature.two.body":
      "将草稿、缓存、构建输出或临时目录排除在结果之外，排除路径会立即校验，并受当前搜索范围限制。",
    "feature.three.title": "保存搜索留在侧边栏",
    "feature.three.body":
      "常用查询可以命名并保存，之后从侧边栏一键重新套用，也支持重命名、删除和清空。",
    "feature.four.title": "设置页覆盖日常偏好",
    "feature.four.body":
      "应用语言、浅色/深色主题、每页结果数和每个导入目录的本地数据库缓存用量都集中在设置页。",
    "gallery.eyebrow": "1.1 产品导览",
    "gallery.title": "新的搜索流程，从快速定位到精细筛选",
    "gallery.description":
      "这些界面来自 2026 年 5 月 4 日整理的 1.1 商店素材，展示保存搜索、高级搜索、排除子目录和设置页。",
    "gallery.one.tag": "高级搜索",
    "gallery.one.title": "组合关键词、目录、扩展名、大小和日期",
    "gallery.one.body":
      "高级搜索表单把常用筛选条件放在一起，减少手写查询语法的负担。",
    "gallery.two.tag": "排除子目录",
    "gallery.two.title": "让搜索结果避开草稿、缓存和临时文件",
    "gallery.two.body":
      "排除规则不会改变索引本身，只在当前搜索结果中移除你不想查看的位置。",
    "gallery.three.tag": "设置",
    "gallery.three.title": "语言、主题、分页和本地缓存更可控",
    "gallery.three.body":
      "设置页现在能调整应用语言和外观，也能查看每个导入目录占用的本地数据库缓存。",
    "usecases.eyebrow": "适用场景",
    "usecases.title": "为反复搜索同一批工作目录的人而设计",
    "usecases.one": "开发者排除 build、cache 和临时目录",
    "usecases.two": "研究者按日期与扩展名整理档案",
    "usecases.three": "创作者按大小定位大型媒体资源",
    "usecases.four": "团队成员保存常用本地查询",
    "privacy.title": "本地索引、保存搜索和设置偏好都保持透明",
    "privacy.subtitle":
      "最后更新于 2026 年 5 月 4 日。本政策说明 SearchFiles 在你使用应用及本网站时如何处理相关信息。",
    "privacy.highlight.one.title": "不接入分析 SDK 或广告追踪器",
    "privacy.highlight.one.body":
      "SearchFiles 当前版本不在应用内使用第三方统计、广告网络或行为追踪工具。",
    "privacy.highlight.two.title": "高级搜索仍基于本地元数据",
    "privacy.highlight.two.body":
      "搜索条件、排除子目录和保存搜索用于筛选本地数据库中的元数据，不需要上传你的文件索引。",
    "privacy.highlight.three.title": "设置与缓存信息留在设备上",
    "privacy.highlight.three.body":
      "应用语言、主题、每页结果数、保存搜索和每个目录的数据库缓存用量都在本地处理。",
    "policy.one.body":
      "对于你导入的文件夹，SearchFiles 可能处理目录名、文件名、完整路径、相对路径、扩展名、文件大小以及创建或修改时间。应用还可能保存你创建的保存搜索名称、查询文本、搜索范围，以及语言、主题和每页结果数等偏好。",
    "policy.two.body":
      "SearchFiles 目前围绕元数据索引设计，不以文件内容搜索为默认能力，也不会嵌入广告标识符，不会在正常使用中把你的索引、保存搜索或设置发送到远端服务器。",
    "policy.three.body":
      "索引后的元数据、保存搜索和设置偏好会保存在你的 Mac 本地，通常位于应用的 Application Support 目录和沙盒容器内。你可以移除已导入文件夹、清空保存搜索，或在设备上删除本地应用数据。",
    "footer.description":
      "一款面向 macOS 的本地优先文件搜索应用，聚焦高级元数据筛选、保存搜索与透明的隐私边界。"
  },
  "zh-Hant": {
    pageDescription:
      "SearchFiles 1.1 是一款重視隱私的 macOS 檔案搜尋應用程式，支援本機元資料索引、進階搜尋、排除子資料夾、儲存搜尋和清楚的設定管理。",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "用進階搜尋、儲存搜尋和本機索引，更快找到 Mac 檔案。",
    "hero.description":
      "SearchFiles 現在可以組合關鍵字、資料夾、副檔名、檔案大小、建立日期和修改日期篩選結果，也能排除草稿、快取或建置輸出等子資料夾，同時保持元資料索引在本機處理。",
    "stats.local.value": "元資料",
    "stats.local.label": "檔名、路徑、大小、日期與副檔名",
    "stats.permission.value": "唯讀",
    "stats.permission.label": "明確授權的 macOS 資料夾存取",
    "stats.engine.value": "1.1",
    "stats.engine.label": "進階篩選、排除子資料夾、儲存搜尋",
    "hero.noteLocal.title": "只索引元資料",
    "hero.noteLocal.text": "不讀取或索引檔案內容。",
    "hero.noteSpeed.title": "為重複搜尋提速",
    "hero.noteSpeed.text": "常用查詢可以保存在側邊欄。",
    "features.eyebrow": "1.1 新功能",
    "features.title": "從簡單搜尋升級為可儲存、可排除、可精細篩選的工作流程",
    "features.description":
      "最近兩天的 app 改動圍繞真實檔案庫的日常搜尋展開：更精確的篩選、更少噪音，以及更清楚的本機設定。",
    "feature.one.title": "進階搜尋組合多個條件",
    "feature.one.body":
      "按關鍵字、匯入資料夾、副檔名、檔案大小、建立日期和修改日期一起篩選，適合面對大型專案目錄或資料歸檔。",
    "feature.two.title": "排除不想看到的子資料夾",
    "feature.two.body":
      "將草稿、快取、建置輸出或臨時資料夾排除在結果之外，排除路徑會立即驗證，並受目前搜尋範圍限制。",
    "feature.three.title": "儲存搜尋留在側邊欄",
    "feature.three.body":
      "常用查詢可以命名並儲存，之後從側邊欄一鍵重新套用，也支援重新命名、刪除和清空。",
    "feature.four.title": "設定頁涵蓋日常偏好",
    "feature.four.body":
      "應用程式語言、明亮/深色主題、每頁結果數和每個匯入資料夾的本機資料庫快取用量都集中在設定頁。",
    "gallery.eyebrow": "1.1 產品導覽",
    "gallery.title": "新的搜尋流程，從快速定位到精細篩選",
    "gallery.description":
      "這些介面來自 2026 年 5 月 4 日整理的 1.1 商店素材，展示儲存搜尋、進階搜尋、排除子資料夾和設定頁。",
    "gallery.one.tag": "進階搜尋",
    "gallery.one.title": "組合關鍵字、資料夾、副檔名、大小和日期",
    "gallery.one.body":
      "進階搜尋表單把常用篩選條件放在一起，減少手寫查詢語法的負擔。",
    "gallery.two.tag": "排除子資料夾",
    "gallery.two.title": "讓搜尋結果避開草稿、快取和臨時檔案",
    "gallery.two.body":
      "排除規則不會改變索引本身，只在目前搜尋結果中移除你不想查看的位置。",
    "gallery.three.tag": "設定",
    "gallery.three.title": "語言、主題、分頁和本機快取更可控",
    "gallery.three.body":
      "設定頁現在能調整應用程式語言和外觀，也能查看每個匯入資料夾占用的本機資料庫快取。",
    "usecases.eyebrow": "適用場景",
    "usecases.title": "為反覆搜尋同一批工作資料夾的人而設計",
    "usecases.one": "開發者排除 build、cache 和臨時目錄",
    "usecases.two": "研究者按日期與副檔名整理檔案",
    "usecases.three": "創作者按大小定位大型媒體資源",
    "usecases.four": "團隊成員儲存常用本機查詢",
    "privacy.title": "本機索引、儲存搜尋和設定偏好都保持透明",
    "privacy.subtitle":
      "最後更新於 2026 年 5 月 4 日。本政策說明 SearchFiles 在你使用應用程式及本網站時如何處理相關資訊。",
    "privacy.highlight.one.title": "不接入分析 SDK 或廣告追蹤器",
    "privacy.highlight.one.body":
      "SearchFiles 目前版本不在應用程式內使用第三方統計、廣告網路或行為追蹤工具。",
    "privacy.highlight.two.title": "進階搜尋仍基於本機元資料",
    "privacy.highlight.two.body":
      "搜尋條件、排除子資料夾和儲存搜尋用於篩選本機資料庫中的元資料，不需要上傳你的檔案索引。",
    "privacy.highlight.three.title": "設定與快取資訊留在裝置上",
    "privacy.highlight.three.body":
      "應用程式語言、主題、每頁結果數、儲存搜尋和每個目錄的資料庫快取用量都在本機處理。",
    "policy.one.body":
      "對於你匯入的資料夾，SearchFiles 可能處理目錄名、檔名、完整路徑、相對路徑、副檔名、檔案大小以及建立或修改時間。應用程式也可能保存你建立的儲存搜尋名稱、查詢文字、搜尋範圍，以及語言、主題和每頁結果數等偏好。",
    "policy.two.body":
      "SearchFiles 目前圍繞元資料索引設計，不以檔案內容搜尋為預設能力，也不會嵌入廣告識別碼，不會在正常使用中把你的索引、儲存搜尋或設定傳送到遠端伺服器。",
    "policy.three.body":
      "索引後的元資料、儲存搜尋和設定偏好會保存在你的 Mac 本機，通常位於應用程式的 Application Support 目錄和沙盒容器內。你可以移除已匯入資料夾、清空儲存搜尋，或在裝置上刪除本機應用程式資料。",
    "footer.description":
      "一款面向 macOS 的本機優先檔案搜尋應用程式，聚焦進階元資料篩選、儲存搜尋與透明的隱私邊界。"
  },
  en: {
    pageDescription:
      "SearchFiles 1.1 is a privacy-first macOS file search app with local metadata indexing, Advanced Search, subfolder exclusions, saved searches, and clear settings.",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "Find Mac files faster with Advanced Search, saved searches, and a local index.",
    "hero.description":
      "SearchFiles now combines keywords, folders, extensions, file size, created dates, and modified dates, while letting you exclude drafts, caches, build outputs, and other noisy subfolders without uploading your metadata index.",
    "stats.local.value": "Metadata",
    "stats.local.label": "Names, paths, sizes, dates, and extensions",
    "stats.permission.value": "Read-only",
    "stats.permission.label": "Explicit macOS folder permissions",
    "stats.engine.value": "1.1",
    "stats.engine.label": "Advanced filters, exclusions, saved searches",
    "hero.noteLocal.title": "Metadata only",
    "hero.noteLocal.text": "File contents are not read or indexed.",
    "hero.noteSpeed.title": "Built for repeat searches",
    "hero.noteSpeed.text": "Frequent queries stay ready in the sidebar.",
    "features.eyebrow": "WHAT'S NEW IN 1.1",
    "features.title": "A richer workflow for precise, repeatable local file search",
    "features.description":
      "The latest app changes focus on real working folders: more precise filters, fewer noisy results, saved searches, and clearer local settings.",
    "feature.one.title": "Combine filters in Advanced Search",
    "feature.one.body":
      "Filter by keywords, imported folder, extension, file size, created date, and modified date in one focused search sheet.",
    "feature.two.title": "Exclude noisy subfolders",
    "feature.two.body":
      "Skip drafts, caches, build outputs, or temporary folders. Excluded paths are validated immediately and must belong to the current search scope.",
    "feature.three.title": "Save searches in the sidebar",
    "feature.three.body":
      "Name frequent queries, reapply them from the sidebar, and manage them with rename, delete, and clear controls.",
    "feature.four.title": "Tune everyday settings",
    "feature.four.body":
      "Set app language, light or dark appearance, results per page, and view local database cache usage for each imported folder.",
    "gallery.eyebrow": "1.1 PRODUCT TOUR",
    "gallery.title": "New search views, from fast lookup to precise filtering",
    "gallery.description":
      "These screens come from the 1.1 store assets prepared on May 4, 2026, covering saved searches, Advanced Search, subfolder exclusions, and Settings.",
    "gallery.one.tag": "Advanced Search",
    "gallery.one.title": "Combine keywords, folder, extension, size, and dates",
    "gallery.one.body":
      "Advanced Search brings the common filters together so you do not have to hand-write query syntax.",
    "gallery.two.tag": "Exclusions",
    "gallery.two.title": "Keep drafts, caches, and temporary files out of results",
    "gallery.two.body":
      "Exclusion rules leave the index unchanged and remove unwanted locations only from the current result set.",
    "gallery.three.tag": "Settings",
    "gallery.three.title": "Control language, theme, pagination, and local cache visibility",
    "gallery.three.body":
      "Settings now includes app language, appearance, results per page, and local database cache usage for imported folders.",
    "usecases.eyebrow": "WORKFLOWS",
    "usecases.title": "Built for people who search the same working folders again and again",
    "usecases.one": "Developers excluding build, cache, and temp folders",
    "usecases.two": "Researchers sorting archives by date and extension",
    "usecases.three": "Creators locating large media assets by size",
    "usecases.four": "Teams saving repeat local queries",
    "privacy.title": "Local indexing, saved searches, and settings stay transparent",
    "privacy.subtitle":
      "Last updated: May 4, 2026. This policy describes how SearchFiles handles information when you use the app and this website.",
    "privacy.highlight.one.title": "No analytics SDKs or advertising trackers",
    "privacy.highlight.one.body":
      "SearchFiles does not use third-party analytics, ad networks, or behavioral tracking in the app.",
    "privacy.highlight.two.title": "Advanced Search still works from local metadata",
    "privacy.highlight.two.body":
      "Filters, excluded subfolders, and saved searches are used to query metadata in the local database without uploading your file index.",
    "privacy.highlight.three.title": "Settings and cache information stay on device",
    "privacy.highlight.three.body":
      "Language, theme, results per page, saved searches, and per-folder database cache usage are handled locally.",
    "policy.one.body":
      "SearchFiles may process folder names, file names, paths, relative paths, extensions, file sizes, and file creation or modification dates for folders you import. It may also store saved search names, query text, search scope, and preferences such as language, theme, and results per page.",
    "policy.two.body":
      "SearchFiles is currently designed around metadata indexing. It does not intentionally read file contents for search, does not embed advertising identifiers, and does not send your index, saved searches, or settings to a remote server as part of normal operation.",
    "policy.three.body":
      "Indexed metadata, saved searches, and settings are stored locally on your Mac, typically inside the app's Application Support directory and sandbox container. You can remove imported folders, clear saved searches, and delete local app data from your device.",
    "footer.description":
      "A local-first macOS file search app focused on advanced metadata filtering, saved searches, and transparent privacy boundaries."
  },
  fr: {
    pageDescription:
      "SearchFiles 1.1 est une app macOS de recherche de fichiers axée sur la confidentialité, avec indexation locale des métadonnées, recherche avancée, exclusions de sous-dossiers, recherches enregistrées et réglages clairs.",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "Trouvez vos fichiers Mac plus vite avec recherche avancée, requêtes enregistrées et index local.",
    "hero.description":
      "SearchFiles combine désormais mots-clés, dossiers, extensions, taille, dates de création et de modification, tout en permettant d'exclure brouillons, caches, sorties de build et sous-dossiers bruyants sans envoyer votre index de métadonnées.",
    "stats.local.value": "Métadonnées",
    "stats.local.label": "Noms, chemins, tailles, dates et extensions",
    "stats.permission.value": "Lecture seule",
    "stats.permission.label": "Autorisations macOS explicites",
    "stats.engine.value": "1.1",
    "stats.engine.label": "Filtres avancés, exclusions, recherches enregistrées",
    "hero.noteLocal.title": "Métadonnées uniquement",
    "hero.noteLocal.text": "Le contenu des fichiers n'est ni lu ni indexé.",
    "hero.noteSpeed.title": "Pensé pour les recherches répétées",
    "hero.noteSpeed.text": "Les requêtes fréquentes restent dans la barre latérale.",
    "features.eyebrow": "NOUVEAUTÉS 1.1",
    "features.title": "Un flux plus riche pour une recherche locale précise et réutilisable",
    "features.description":
      "Les derniers changements visent les vrais dossiers de travail : filtres plus précis, moins de bruit, recherches enregistrées et réglages locaux plus clairs.",
    "feature.one.title": "Combinez les filtres dans la recherche avancée",
    "feature.one.body":
      "Filtrez par mots-clés, dossier importé, extension, taille, date de création et date de modification dans une feuille de recherche dédiée.",
    "feature.two.title": "Excluez les sous-dossiers bruyants",
    "feature.two.body":
      "Ignorez brouillons, caches, sorties de build ou dossiers temporaires. Les chemins exclus sont validés immédiatement et doivent appartenir à la portée actuelle.",
    "feature.three.title": "Enregistrez vos recherches dans la barre latérale",
    "feature.three.body":
      "Nommez les requêtes fréquentes, relancez-les depuis la barre latérale et gérez-les avec renommage, suppression et effacement.",
    "feature.four.title": "Ajustez les réglages du quotidien",
    "feature.four.body":
      "Choisissez la langue de l'app, le thème clair ou sombre, le nombre de résultats par page et consultez le cache local de chaque dossier importé.",
    "gallery.eyebrow": "VISITE 1.1",
    "gallery.title": "De nouvelles vues, de la recherche rapide au filtrage précis",
    "gallery.description":
      "Ces écrans proviennent des ressources Store 1.1 préparées le 4 mai 2026, avec recherches enregistrées, recherche avancée, exclusions et réglages.",
    "gallery.one.tag": "Recherche avancée",
    "gallery.one.title": "Combinez mots-clés, dossier, extension, taille et dates",
    "gallery.one.body":
      "La recherche avancée regroupe les filtres courants pour éviter d'écrire la syntaxe de requête à la main.",
    "gallery.two.tag": "Exclusions",
    "gallery.two.title": "Gardez brouillons, caches et fichiers temporaires hors des résultats",
    "gallery.two.body":
      "Les règles d'exclusion ne modifient pas l'index et retirent seulement les emplacements indésirables des résultats actuels.",
    "gallery.three.tag": "Réglages",
    "gallery.three.title": "Contrôlez langue, thème, pagination et cache local",
    "gallery.three.body":
      "Les réglages incluent désormais langue, apparence, résultats par page et usage du cache local par dossier importé.",
    "usecases.eyebrow": "FLUX DE TRAVAIL",
    "usecases.title": "Conçu pour rechercher souvent les mêmes dossiers de travail",
    "usecases.one": "Développeurs excluant build, cache et dossiers temporaires",
    "usecases.two": "Chercheurs classant des archives par date et extension",
    "usecases.three": "Créateurs localisant de gros médias par taille",
    "usecases.four": "Équipes enregistrant des requêtes locales récurrentes",
    "privacy.title": "Index local, recherches enregistrées et réglages restent transparents",
    "privacy.subtitle":
      "Dernière mise à jour : 4 mai 2026. Cette politique décrit comment SearchFiles traite les informations lorsque vous utilisez l'app et ce site.",
    "privacy.highlight.two.title": "La recherche avancée reste basée sur les métadonnées locales",
    "privacy.highlight.two.body":
      "Les filtres, sous-dossiers exclus et recherches enregistrées interrogent les métadonnées locales sans téléverser votre index.",
    "privacy.highlight.three.title": "Réglages et cache restent sur l'appareil",
    "privacy.highlight.three.body":
      "Langue, thème, résultats par page, recherches enregistrées et cache de base de données par dossier sont traités localement.",
    "policy.one.body":
      "SearchFiles peut traiter les noms de dossiers, noms de fichiers, chemins, chemins relatifs, extensions, tailles de fichiers et dates de création ou de modification des dossiers importés. Il peut aussi stocker les noms de recherches enregistrées, le texte des requêtes, la portée de recherche et des préférences comme langue, thème et résultats par page.",
    "policy.two.body":
      "SearchFiles est actuellement conçu autour de l'indexation des métadonnées. Il ne lit pas intentionnellement le contenu des fichiers pour la recherche, n'intègre pas d'identifiants publicitaires et n'envoie pas votre index, vos recherches enregistrées ou vos réglages à un serveur distant pendant l'utilisation normale.",
    "policy.three.body":
      "Les métadonnées indexées, recherches enregistrées et réglages sont stockés localement sur votre Mac, généralement dans le dossier Application Support de l'app et son conteneur sandbox. Vous pouvez retirer des dossiers importés, effacer les recherches enregistrées et supprimer les données locales de l'app.",
    "footer.description":
      "Une app macOS de recherche locale centrée sur le filtrage avancé des métadonnées, les recherches enregistrées et des limites de confidentialité transparentes."
  },
  de: {
    pageDescription:
      "SearchFiles 1.1 ist eine datenschutzorientierte macOS-Dateisuche mit lokalem Metadatenindex, erweiterter Suche, Unterordner-Ausschlüssen, gespeicherten Suchen und klaren Einstellungen.",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "Finde Mac-Dateien schneller mit erweiterter Suche, gespeicherten Suchen und lokalem Index.",
    "hero.description":
      "SearchFiles kombiniert jetzt Stichwörter, Ordner, Erweiterungen, Dateigröße, Erstellungs- und Änderungsdaten und kann Entwürfe, Caches, Build-Ausgaben und andere störende Unterordner ausschließen, ohne deinen Metadatenindex hochzuladen.",
    "stats.local.value": "Metadaten",
    "stats.local.label": "Namen, Pfade, Größen, Daten und Erweiterungen",
    "stats.permission.value": "Nur lesen",
    "stats.permission.label": "Ausdrückliche macOS-Ordnerrechte",
    "stats.engine.value": "1.1",
    "stats.engine.label": "Erweiterte Filter, Ausschlüsse, gespeicherte Suchen",
    "hero.noteLocal.title": "Nur Metadaten",
    "hero.noteLocal.text": "Dateiinhalte werden nicht gelesen oder indexiert.",
    "hero.noteSpeed.title": "Für wiederholte Suchen gebaut",
    "hero.noteSpeed.text": "Häufige Abfragen bleiben in der Seitenleiste.",
    "features.eyebrow": "NEU IN 1.1",
    "features.title": "Ein stärkerer Workflow für präzise und wiederholbare lokale Dateisuche",
    "features.description":
      "Die neuesten Änderungen zielen auf echte Arbeitsordner: genauere Filter, weniger Rauschen, gespeicherte Suchen und klarere lokale Einstellungen.",
    "feature.one.title": "Filter in der erweiterten Suche kombinieren",
    "feature.one.body":
      "Filtere nach Stichwörtern, importiertem Ordner, Erweiterung, Dateigröße, Erstellungsdatum und Änderungsdatum in einem Suchdialog.",
    "feature.two.title": "Störende Unterordner ausschließen",
    "feature.two.body":
      "Überspringe Entwürfe, Caches, Build-Ausgaben oder temporäre Ordner. Ausgeschlossene Pfade werden sofort geprüft und müssen im aktuellen Suchbereich liegen.",
    "feature.three.title": "Suchen in der Seitenleiste speichern",
    "feature.three.body":
      "Benenne häufige Abfragen, wende sie aus der Seitenleiste erneut an und verwalte sie mit Umbenennen, Löschen und Bereinigen.",
    "feature.four.title": "Alltagseinstellungen anpassen",
    "feature.four.body":
      "Lege App-Sprache, helles oder dunkles Design und Ergebnisse pro Seite fest und sieh den lokalen Datenbankcache jedes importierten Ordners.",
    "gallery.eyebrow": "1.1 PRODUKTRUNDGANG",
    "gallery.title": "Neue Suchansichten, von schneller Suche bis präzisem Filtern",
    "gallery.description":
      "Diese Ansichten stammen aus den Store-Assets 1.1 vom 4. Mai 2026 und zeigen gespeicherte Suchen, erweiterte Suche, Ausschlüsse und Einstellungen.",
    "gallery.one.tag": "Erweiterte Suche",
    "gallery.one.title": "Kombiniere Stichwörter, Ordner, Erweiterung, Größe und Daten",
    "gallery.one.body":
      "Die erweiterte Suche bündelt die wichtigsten Filter, damit du keine Abfragesyntax von Hand schreiben musst.",
    "gallery.two.tag": "Ausschlüsse",
    "gallery.two.title": "Halte Entwürfe, Caches und temporäre Dateien aus Ergebnissen heraus",
    "gallery.two.body":
      "Ausschlussregeln ändern den Index nicht und entfernen unerwünschte Orte nur aus den aktuellen Ergebnissen.",
    "gallery.three.tag": "Einstellungen",
    "gallery.three.title": "Sprache, Design, Paginierung und lokalen Cache kontrollieren",
    "gallery.three.body":
      "Die Einstellungen enthalten jetzt Sprache, Erscheinungsbild, Ergebnisse pro Seite und lokalen Datenbankcache pro importiertem Ordner.",
    "usecases.eyebrow": "WORKFLOWS",
    "usecases.title": "Gebaut für alle, die dieselben Arbeitsordner immer wieder durchsuchen",
    "usecases.one": "Entwickler, die Build-, Cache- und Temp-Ordner ausschließen",
    "usecases.two": "Forschende, die Archive nach Datum und Erweiterung sortieren",
    "usecases.three": "Kreative, die große Medien nach Größe finden",
    "usecases.four": "Teams, die wiederkehrende lokale Abfragen speichern",
    "privacy.title": "Lokaler Index, gespeicherte Suchen und Einstellungen bleiben transparent",
    "privacy.subtitle":
      "Zuletzt aktualisiert: 4. Mai 2026. Diese Erklärung beschreibt, wie SearchFiles Informationen verarbeitet, wenn du die App und diese Website nutzt.",
    "privacy.highlight.two.title": "Erweiterte Suche basiert weiter auf lokalen Metadaten",
    "privacy.highlight.two.body":
      "Filter, ausgeschlossene Unterordner und gespeicherte Suchen fragen Metadaten in der lokalen Datenbank ab, ohne deinen Dateiindex hochzuladen.",
    "privacy.highlight.three.title": "Einstellungen und Cache-Informationen bleiben auf dem Gerät",
    "privacy.highlight.three.body":
      "Sprache, Design, Ergebnisse pro Seite, gespeicherte Suchen und Datenbankcache pro Ordner werden lokal verarbeitet.",
    "policy.one.body":
      "SearchFiles kann für importierte Ordner Ordnernamen, Dateinamen, Pfade, relative Pfade, Erweiterungen, Dateigrößen sowie Erstellungs- oder Änderungsdaten verarbeiten. Die App kann außerdem Namen gespeicherter Suchen, Abfragetext, Suchbereich und Einstellungen wie Sprache, Design und Ergebnisse pro Seite speichern.",
    "policy.two.body":
      "SearchFiles ist derzeit auf Metadatenindexierung ausgelegt. Die App liest Dateiinhalte nicht absichtlich für die Suche, bettet keine Werbe-IDs ein und sendet deinen Index, gespeicherte Suchen oder Einstellungen bei normaler Nutzung nicht an einen Remote-Server.",
    "policy.three.body":
      "Indexierte Metadaten, gespeicherte Suchen und Einstellungen werden lokal auf deinem Mac gespeichert, normalerweise im Application-Support-Ordner der App und im Sandbox-Container. Du kannst importierte Ordner entfernen, gespeicherte Suchen bereinigen und lokale App-Daten löschen.",
    "footer.description":
      "Eine lokale macOS-Dateisuche mit Fokus auf erweiterte Metadatenfilter, gespeicherte Suchen und transparente Datenschutzgrenzen."
  },
  ja: {
    pageDescription:
      "SearchFiles 1.1 は、ローカルメタデータ索引、詳細検索、サブフォルダ除外、保存済み検索、明確な設定を備えた、プライバシー重視の macOS ファイル検索アプリです。",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "詳細検索、保存済み検索、ローカル索引で Mac のファイルをより速く発見。",
    "hero.description":
      "SearchFiles はキーワード、フォルダ、拡張子、ファイルサイズ、作成日、変更日を組み合わせられるようになりました。下書き、キャッシュ、ビルド出力などのサブフォルダを除外しても、メタデータ索引はアップロードされません。",
    "stats.local.value": "メタデータ",
    "stats.local.label": "名前、パス、サイズ、日付、拡張子",
    "stats.permission.value": "読み取り専用",
    "stats.permission.label": "明示的な macOS フォルダ権限",
    "stats.engine.value": "1.1",
    "stats.engine.label": "詳細フィルタ、除外、保存済み検索",
    "hero.noteLocal.title": "メタデータのみ",
    "hero.noteLocal.text": "ファイル内容は読み取らず索引化もしません。",
    "hero.noteSpeed.title": "繰り返す検索を高速に",
    "hero.noteSpeed.text": "よく使うクエリはサイドバーに残せます。",
    "features.eyebrow": "1.1 の新機能",
    "features.title": "正確で繰り返し使えるローカルファイル検索ワークフロー",
    "features.description":
      "最新の変更は実際の作業フォルダに焦点を当てています。より正確なフィルタ、少ないノイズ、保存済み検索、わかりやすいローカル設定です。",
    "feature.one.title": "詳細検索で複数条件を組み合わせ",
    "feature.one.body":
      "キーワード、読み込み済みフォルダ、拡張子、ファイルサイズ、作成日、変更日を 1 つの検索シートで絞り込めます。",
    "feature.two.title": "不要なサブフォルダを除外",
    "feature.two.body":
      "下書き、キャッシュ、ビルド出力、一時フォルダを除外できます。除外パスはすぐ検証され、現在の検索範囲内にある必要があります。",
    "feature.three.title": "検索をサイドバーに保存",
    "feature.three.body":
      "よく使うクエリに名前を付けて保存し、サイドバーから再適用できます。名前変更、削除、消去にも対応します。",
    "feature.four.title": "日常設定を調整",
    "feature.four.body":
      "アプリ言語、ライト/ダーク外観、ページあたりの結果数、読み込み済みフォルダごとのローカルデータベースキャッシュを確認できます。",
    "gallery.eyebrow": "1.1 製品ツアー",
    "gallery.title": "すばやい検索から精密な絞り込みまで、新しい検索画面",
    "gallery.description":
      "これらの画面は 2026 年 5 月 4 日に準備された 1.1 Store 素材で、保存済み検索、詳細検索、除外、設定を示しています。",
    "gallery.one.tag": "詳細検索",
    "gallery.one.title": "キーワード、フォルダ、拡張子、サイズ、日付を組み合わせ",
    "gallery.one.body":
      "詳細検索は一般的なフィルタをまとめ、クエリ構文を手入力する負担を減らします。",
    "gallery.two.tag": "除外",
    "gallery.two.title": "下書き、キャッシュ、一時ファイルを結果から外す",
    "gallery.two.body":
      "除外ルールは索引を変更せず、現在の結果から不要な場所だけを取り除きます。",
    "gallery.three.tag": "設定",
    "gallery.three.title": "言語、テーマ、ページ分割、ローカルキャッシュを管理",
    "gallery.three.body":
      "設定にはアプリ言語、外観、ページあたりの結果数、フォルダごとのローカルデータベースキャッシュが追加されました。",
    "usecases.eyebrow": "ワークフロー",
    "usecases.title": "同じ作業フォルダを何度も検索する人のために設計",
    "usecases.one": "build、cache、一時フォルダを除外する開発者",
    "usecases.two": "日付と拡張子でアーカイブを整理する研究者",
    "usecases.three": "サイズで大きなメディア素材を探すクリエイター",
    "usecases.four": "繰り返すローカルクエリを保存するチーム",
    "privacy.title": "ローカル索引、保存済み検索、設定を透明に扱います",
    "privacy.subtitle":
      "最終更新日：2026 年 5 月 4 日。このポリシーは、アプリとこの Web サイトの利用時に SearchFiles が情報をどう扱うかを説明します。",
    "privacy.highlight.two.title": "詳細検索もローカルメタデータに基づきます",
    "privacy.highlight.two.body":
      "フィルタ、除外サブフォルダ、保存済み検索はローカルデータベースのメタデータを検索し、ファイル索引をアップロードしません。",
    "privacy.highlight.three.title": "設定とキャッシュ情報は端末に残ります",
    "privacy.highlight.three.body":
      "言語、テーマ、ページあたりの結果数、保存済み検索、フォルダごとのデータベースキャッシュはローカルで処理されます。",
    "policy.one.body":
      "インポートしたフォルダについて、SearchFiles はフォルダ名、ファイル名、パス、相対パス、拡張子、ファイルサイズ、作成日や変更日を処理する場合があります。また、保存済み検索の名前、クエリ文字列、検索範囲、言語、テーマ、ページあたりの結果数などの設定を保存する場合があります。",
    "policy.two.body":
      "SearchFiles は現在、メタデータのインデックスを中心に設計されています。検索のためにファイル内容を意図的に読むことはなく、広告識別子を組み込まず、通常利用時にインデックス、保存済み検索、設定をリモートサーバーへ送信しません。",
    "policy.three.body":
      "インデックス済みメタデータ、保存済み検索、設定は Mac 上にローカル保存され、通常はアプリの Application Support ディレクトリとサンドボックスコンテナ内にあります。インポート済みフォルダの削除、保存済み検索の消去、ローカルアプリデータの削除ができます。",
    "footer.description":
      "詳細なメタデータ絞り込み、保存済み検索、透明なプライバシー境界に重点を置いた、macOS 向けローカル優先ファイル検索アプリ。"
  },
  it: {
    pageDescription:
      "SearchFiles 1.1 è un'app macOS per cercare file con privacy al centro, indice locale dei metadati, ricerca avanzata, esclusione di sottocartelle, ricerche salvate e impostazioni chiare.",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "Trova file Mac più velocemente con ricerca avanzata, query salvate e indice locale.",
    "hero.description":
      "SearchFiles ora combina parole chiave, cartelle, estensioni, dimensione file, date di creazione e modifica, e permette di escludere bozze, cache, output di build e altre sottocartelle rumorose senza caricare l'indice dei metadati.",
    "stats.local.value": "Metadati",
    "stats.local.label": "Nomi, percorsi, dimensioni, date ed estensioni",
    "stats.permission.value": "Sola lettura",
    "stats.permission.label": "Permessi cartelle macOS espliciti",
    "stats.engine.value": "1.1",
    "stats.engine.label": "Filtri avanzati, esclusioni, ricerche salvate",
    "hero.noteLocal.title": "Solo metadati",
    "hero.noteLocal.text": "Il contenuto dei file non viene letto o indicizzato.",
    "hero.noteSpeed.title": "Pensato per ricerche ricorrenti",
    "hero.noteSpeed.text": "Le query frequenti restano pronte nella barra laterale.",
    "features.eyebrow": "NOVITÀ 1.1",
    "features.title": "Un flusso più ricco per una ricerca locale precisa e riutilizzabile",
    "features.description":
      "Le ultime modifiche puntano alle cartelle di lavoro reali: filtri più precisi, meno rumore, ricerche salvate e impostazioni locali più chiare.",
    "feature.one.title": "Combina filtri nella ricerca avanzata",
    "feature.one.body":
      "Filtra per parole chiave, cartella importata, estensione, dimensione file, data di creazione e data di modifica in un unico pannello.",
    "feature.two.title": "Escludi sottocartelle rumorose",
    "feature.two.body":
      "Salta bozze, cache, output di build o cartelle temporanee. I percorsi esclusi sono verificati subito e devono appartenere all'ambito corrente.",
    "feature.three.title": "Salva ricerche nella barra laterale",
    "feature.three.body":
      "Dai un nome alle query frequenti, riapplicale dalla barra laterale e gestiscile con rinomina, eliminazione e pulizia.",
    "feature.four.title": "Regola le impostazioni quotidiane",
    "feature.four.body":
      "Imposta lingua app, tema chiaro o scuro, risultati per pagina e visualizza l'uso cache del database locale per ogni cartella importata.",
    "gallery.eyebrow": "TOUR 1.1",
    "gallery.title": "Nuove viste di ricerca, dalla ricerca rapida al filtro preciso",
    "gallery.description":
      "Queste schermate provengono dagli asset Store 1.1 preparati il 4 maggio 2026 e mostrano ricerche salvate, ricerca avanzata, esclusioni e impostazioni.",
    "gallery.one.tag": "Ricerca avanzata",
    "gallery.one.title": "Combina parole chiave, cartella, estensione, dimensione e date",
    "gallery.one.body":
      "La ricerca avanzata riunisce i filtri comuni per evitare di scrivere a mano la sintassi della query.",
    "gallery.two.tag": "Esclusioni",
    "gallery.two.title": "Tieni fuori dai risultati bozze, cache e file temporanei",
    "gallery.two.body":
      "Le regole di esclusione non cambiano l'indice e rimuovono posizioni indesiderate solo dai risultati correnti.",
    "gallery.three.tag": "Impostazioni",
    "gallery.three.title": "Controlla lingua, tema, paginazione e cache locale",
    "gallery.three.body":
      "Le impostazioni ora includono lingua, aspetto, risultati per pagina e uso del database locale per cartella importata.",
    "usecases.eyebrow": "FLUSSI DI LAVORO",
    "usecases.title": "Creato per chi cerca spesso nelle stesse cartelle di lavoro",
    "usecases.one": "Sviluppatori che escludono build, cache e cartelle temporanee",
    "usecases.two": "Ricercatori che ordinano archivi per data ed estensione",
    "usecases.three": "Creator che trovano grandi media per dimensione",
    "usecases.four": "Team che salvano query locali ricorrenti",
    "privacy.title": "Indice locale, ricerche salvate e impostazioni restano trasparenti",
    "privacy.subtitle":
      "Ultimo aggiornamento: 4 maggio 2026. Questa informativa descrive come SearchFiles gestisce le informazioni quando usi l'app e questo sito.",
    "privacy.highlight.two.title": "La ricerca avanzata usa ancora metadati locali",
    "privacy.highlight.two.body":
      "Filtri, sottocartelle escluse e ricerche salvate interrogano i metadati nel database locale senza caricare l'indice dei file.",
    "privacy.highlight.three.title": "Impostazioni e cache restano sul dispositivo",
    "privacy.highlight.three.body":
      "Lingua, tema, risultati per pagina, ricerche salvate e uso cache per cartella sono gestiti localmente.",
    "policy.one.body":
      "SearchFiles può elaborare nomi di cartelle, nomi file, percorsi, percorsi relativi, estensioni, dimensioni file e date di creazione o modifica delle cartelle importate. Può anche salvare nomi delle ricerche, testo query, ambito di ricerca e preferenze come lingua, tema e risultati per pagina.",
    "policy.two.body":
      "SearchFiles è attualmente progettato intorno all'indicizzazione dei metadati. Non legge intenzionalmente il contenuto dei file per la ricerca, non integra identificatori pubblicitari e non invia il tuo indice, le ricerche salvate o le impostazioni a un server remoto durante l'uso normale.",
    "policy.three.body":
      "Metadati indicizzati, ricerche salvate e impostazioni sono salvati localmente sul tuo Mac, di solito nella cartella Application Support dell'app e nel contenitore sandbox. Puoi rimuovere cartelle importate, pulire le ricerche salvate ed eliminare i dati locali dell'app.",
    "footer.description":
      "Un'app macOS di ricerca file locale, focalizzata su filtri avanzati dei metadati, ricerche salvate e confini privacy trasparenti."
  },
  pt: {
    pageDescription:
      "SearchFiles 1.1 é um app macOS de busca de arquivos com foco em privacidade, índice local de metadados, busca avançada, exclusão de subpastas, buscas salvas e configurações claras.",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "Encontre arquivos do Mac mais rápido com busca avançada, buscas salvas e índice local.",
    "hero.description":
      "SearchFiles agora combina palavras-chave, pastas, extensões, tamanho, datas de criação e modificação, e permite excluir rascunhos, caches, saídas de build e outras subpastas ruidosas sem enviar seu índice de metadados.",
    "stats.local.value": "Metadados",
    "stats.local.label": "Nomes, caminhos, tamanhos, datas e extensões",
    "stats.permission.value": "Somente leitura",
    "stats.permission.label": "Permissões explícitas de pastas no macOS",
    "stats.engine.value": "1.1",
    "stats.engine.label": "Filtros avançados, exclusões, buscas salvas",
    "hero.noteLocal.title": "Somente metadados",
    "hero.noteLocal.text": "O conteúdo dos arquivos não é lido nem indexado.",
    "hero.noteSpeed.title": "Feito para buscas recorrentes",
    "hero.noteSpeed.text": "Consultas frequentes ficam prontas na barra lateral.",
    "features.eyebrow": "NOVIDADES 1.1",
    "features.title": "Um fluxo mais rico para busca local precisa e reutilizável",
    "features.description":
      "As mudanças recentes focam pastas reais de trabalho: filtros mais precisos, menos ruído, buscas salvas e configurações locais mais claras.",
    "feature.one.title": "Combine filtros na busca avançada",
    "feature.one.body":
      "Filtre por palavras-chave, pasta importada, extensão, tamanho, data de criação e data de modificação em uma única tela de busca.",
    "feature.two.title": "Exclua subpastas ruidosas",
    "feature.two.body":
      "Ignore rascunhos, caches, saídas de build ou pastas temporárias. Caminhos excluídos são validados imediatamente e precisam pertencer ao escopo atual.",
    "feature.three.title": "Salve buscas na barra lateral",
    "feature.three.body":
      "Nomeie consultas frequentes, reaplique pela barra lateral e gerencie com renomear, excluir e limpar.",
    "feature.four.title": "Ajuste configurações do dia a dia",
    "feature.four.body":
      "Defina idioma do app, aparência clara ou escura, resultados por página e veja o uso do cache do banco de dados local por pasta importada.",
    "gallery.eyebrow": "TOUR 1.1",
    "gallery.title": "Novas telas de busca, da localização rápida ao filtro preciso",
    "gallery.description":
      "Estas telas vêm dos assets Store 1.1 preparados em 4 de maio de 2026, com buscas salvas, busca avançada, exclusões e configurações.",
    "gallery.one.tag": "Busca avançada",
    "gallery.one.title": "Combine palavras-chave, pasta, extensão, tamanho e datas",
    "gallery.one.body":
      "A busca avançada reúne filtros comuns para evitar escrever a sintaxe da consulta manualmente.",
    "gallery.two.tag": "Exclusões",
    "gallery.two.title": "Mantenha rascunhos, caches e temporários fora dos resultados",
    "gallery.two.body":
      "Regras de exclusão não alteram o índice e removem locais indesejados apenas dos resultados atuais.",
    "gallery.three.tag": "Configurações",
    "gallery.three.title": "Controle idioma, tema, paginação e cache local",
    "gallery.three.body":
      "As configurações agora incluem idioma, aparência, resultados por página e uso do banco de dados local por pasta importada.",
    "usecases.eyebrow": "FLUXOS",
    "usecases.title": "Criado para quem pesquisa as mesmas pastas de trabalho várias vezes",
    "usecases.one": "Desenvolvedores excluindo build, cache e pastas temporárias",
    "usecases.two": "Pesquisadores organizando arquivos por data e extensão",
    "usecases.three": "Criadores localizando mídias grandes por tamanho",
    "usecases.four": "Equipes salvando consultas locais recorrentes",
    "privacy.title": "Índice local, buscas salvas e configurações seguem transparentes",
    "privacy.subtitle":
      "Última atualização: 4 de maio de 2026. Esta política descreve como SearchFiles trata informações quando você usa o app e este site.",
    "privacy.highlight.two.title": "A busca avançada ainda usa metadados locais",
    "privacy.highlight.two.body":
      "Filtros, subpastas excluídas e buscas salvas consultam metadados no banco local sem enviar seu índice de arquivos.",
    "privacy.highlight.three.title": "Configurações e cache ficam no dispositivo",
    "privacy.highlight.three.body":
      "Idioma, tema, resultados por página, buscas salvas e uso de cache por pasta são tratados localmente.",
    "policy.one.body":
      "SearchFiles pode processar nomes de pastas, nomes de arquivos, caminhos, caminhos relativos, extensões, tamanhos e datas de criação ou modificação das pastas importadas. Também pode armazenar nomes de buscas salvas, texto da consulta, escopo de busca e preferências como idioma, tema e resultados por página.",
    "policy.two.body":
      "SearchFiles atualmente é projetado em torno da indexação de metadados. Ele não lê intencionalmente o conteúdo dos arquivos para busca, não incorpora identificadores de publicidade e não envia seu índice, buscas salvas ou configurações a um servidor remoto durante o uso normal.",
    "policy.three.body":
      "Metadados indexados, buscas salvas e configurações são armazenados localmente no seu Mac, normalmente no diretório Application Support do app e no contêiner sandbox. Você pode remover pastas importadas, limpar buscas salvas e excluir dados locais do app.",
    "footer.description":
      "Um app macOS de busca local de arquivos focado em filtros avançados de metadados, buscas salvas e limites transparentes de privacidade."
  },
  es: {
    pageDescription:
      "SearchFiles 1.1 es una app macOS de búsqueda de archivos centrada en la privacidad, con índice local de metadatos, búsqueda avanzada, exclusión de subcarpetas, búsquedas guardadas y ajustes claros.",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "Encuentra archivos del Mac más rápido con búsqueda avanzada, búsquedas guardadas e índice local.",
    "hero.description":
      "SearchFiles ahora combina palabras clave, carpetas, extensiones, tamaño, fechas de creación y modificación, y permite excluir borradores, cachés, salidas de build y otras subcarpetas ruidosas sin subir tu índice de metadatos.",
    "stats.local.value": "Metadatos",
    "stats.local.label": "Nombres, rutas, tamaños, fechas y extensiones",
    "stats.permission.value": "Solo lectura",
    "stats.permission.label": "Permisos explícitos de carpetas en macOS",
    "stats.engine.value": "1.1",
    "stats.engine.label": "Filtros avanzados, exclusiones, búsquedas guardadas",
    "hero.noteLocal.title": "Solo metadatos",
    "hero.noteLocal.text": "El contenido de archivos no se lee ni se indexa.",
    "hero.noteSpeed.title": "Pensado para búsquedas repetidas",
    "hero.noteSpeed.text": "Las consultas frecuentes quedan listas en la barra lateral.",
    "features.eyebrow": "NOVEDADES 1.1",
    "features.title": "Un flujo más completo para búsqueda local precisa y reutilizable",
    "features.description":
      "Los cambios recientes se centran en carpetas reales de trabajo: filtros más precisos, menos ruido, búsquedas guardadas y ajustes locales más claros.",
    "feature.one.title": "Combina filtros en búsqueda avanzada",
    "feature.one.body":
      "Filtra por palabras clave, carpeta importada, extensión, tamaño, fecha de creación y fecha de modificación en una sola hoja.",
    "feature.two.title": "Excluye subcarpetas ruidosas",
    "feature.two.body":
      "Omite borradores, cachés, salidas de build o carpetas temporales. Las rutas excluidas se validan al instante y deben pertenecer al alcance actual.",
    "feature.three.title": "Guarda búsquedas en la barra lateral",
    "feature.three.body":
      "Nombra consultas frecuentes, reutilízalas desde la barra lateral y gestiónalas con renombrar, eliminar y limpiar.",
    "feature.four.title": "Ajusta preferencias diarias",
    "feature.four.body":
      "Define idioma de la app, apariencia clara u oscura, resultados por página y consulta el uso de caché local por carpeta importada.",
    "gallery.eyebrow": "TOUR 1.1",
    "gallery.title": "Nuevas vistas de búsqueda, de localizar rápido a filtrar con precisión",
    "gallery.description":
      "Estas pantallas vienen de los assets Store 1.1 preparados el 4 de mayo de 2026, con búsquedas guardadas, búsqueda avanzada, exclusiones y ajustes.",
    "gallery.one.tag": "Búsqueda avanzada",
    "gallery.one.title": "Combina palabras clave, carpeta, extensión, tamaño y fechas",
    "gallery.one.body":
      "La búsqueda avanzada reúne filtros comunes para evitar escribir a mano la sintaxis de consulta.",
    "gallery.two.tag": "Exclusiones",
    "gallery.two.title": "Mantén borradores, cachés y temporales fuera de los resultados",
    "gallery.two.body":
      "Las reglas de exclusión no cambian el índice y eliminan ubicaciones no deseadas solo de los resultados actuales.",
    "gallery.three.tag": "Ajustes",
    "gallery.three.title": "Controla idioma, tema, paginación y caché local",
    "gallery.three.body":
      "Los ajustes ahora incluyen idioma, apariencia, resultados por página y uso de base de datos local por carpeta importada.",
    "usecases.eyebrow": "FLUJOS",
    "usecases.title": "Creado para quienes buscan una y otra vez en las mismas carpetas",
    "usecases.one": "Desarrolladores que excluyen build, caché y carpetas temporales",
    "usecases.two": "Investigadores que ordenan archivos por fecha y extensión",
    "usecases.three": "Creadores que localizan medios grandes por tamaño",
    "usecases.four": "Equipos que guardan consultas locales recurrentes",
    "privacy.title": "Índice local, búsquedas guardadas y ajustes se mantienen transparentes",
    "privacy.subtitle":
      "Última actualización: 4 de mayo de 2026. Esta política describe cómo SearchFiles gestiona información cuando usas la app y este sitio.",
    "privacy.highlight.two.title": "La búsqueda avanzada sigue usando metadatos locales",
    "privacy.highlight.two.body":
      "Filtros, subcarpetas excluidas y búsquedas guardadas consultan metadatos en la base local sin subir tu índice de archivos.",
    "privacy.highlight.three.title": "Ajustes e información de caché quedan en el dispositivo",
    "privacy.highlight.three.body":
      "Idioma, tema, resultados por página, búsquedas guardadas y uso de caché por carpeta se gestionan localmente.",
    "policy.one.body":
      "SearchFiles puede procesar nombres de carpetas, nombres de archivos, rutas, rutas relativas, extensiones, tamaños y fechas de creación o modificación de las carpetas importadas. También puede guardar nombres de búsquedas, texto de consulta, alcance de búsqueda y preferencias como idioma, tema y resultados por página.",
    "policy.two.body":
      "SearchFiles está diseñado actualmente en torno a la indexación de metadatos. No lee intencionalmente el contenido de archivos para la búsqueda, no incorpora identificadores publicitarios y no envía tu índice, búsquedas guardadas o ajustes a un servidor remoto durante el uso normal.",
    "policy.three.body":
      "Los metadatos indexados, búsquedas guardadas y ajustes se almacenan localmente en tu Mac, normalmente dentro del directorio Application Support de la app y su contenedor sandbox. Puedes quitar carpetas importadas, limpiar búsquedas guardadas y eliminar datos locales de la app.",
    "footer.description":
      "Una app macOS de búsqueda local de archivos centrada en filtros avanzados de metadatos, búsquedas guardadas y límites de privacidad transparentes."
  },
  ko: {
    pageDescription:
      "SearchFiles 1.1은 로컬 메타데이터 인덱스, 고급 검색, 하위 폴더 제외, 저장된 검색, 명확한 설정을 갖춘 개인정보 중심 macOS 파일 검색 앱입니다.",
    "hero.eyebrow": "SEARCHFILES 1.1",
    "hero.title": "고급 검색, 저장된 검색, 로컬 인덱스로 Mac 파일을 더 빠르게 찾으세요.",
    "hero.description":
      "SearchFiles는 이제 키워드, 폴더, 확장자, 파일 크기, 생성일, 수정일을 조합하고, 초안, 캐시, 빌드 출력 같은 하위 폴더를 제외할 수 있습니다. 메타데이터 인덱스는 업로드되지 않습니다.",
    "stats.local.value": "메타데이터",
    "stats.local.label": "이름, 경로, 크기, 날짜, 확장자",
    "stats.permission.value": "읽기 전용",
    "stats.permission.label": "명시적인 macOS 폴더 권한",
    "stats.engine.value": "1.1",
    "stats.engine.label": "고급 필터, 제외, 저장된 검색",
    "hero.noteLocal.title": "메타데이터만",
    "hero.noteLocal.text": "파일 내용은 읽거나 인덱싱하지 않습니다.",
    "hero.noteSpeed.title": "반복 검색을 위해 설계",
    "hero.noteSpeed.text": "자주 쓰는 쿼리는 사이드바에 보관됩니다.",
    "features.eyebrow": "1.1 새로운 기능",
    "features.title": "정확하고 반복 가능한 로컬 파일 검색 워크플로",
    "features.description":
      "최신 변경은 실제 작업 폴더에 맞춰져 있습니다. 더 정확한 필터, 적은 노이즈, 저장된 검색, 더 명확한 로컬 설정입니다.",
    "feature.one.title": "고급 검색에서 여러 필터 조합",
    "feature.one.body":
      "키워드, 가져온 폴더, 확장자, 파일 크기, 생성일, 수정일을 하나의 검색 시트에서 필터링합니다.",
    "feature.two.title": "노이즈가 많은 하위 폴더 제외",
    "feature.two.body":
      "초안, 캐시, 빌드 출력, 임시 폴더를 건너뜁니다. 제외 경로는 즉시 검증되며 현재 검색 범위에 속해야 합니다.",
    "feature.three.title": "검색을 사이드바에 저장",
    "feature.three.body":
      "자주 쓰는 쿼리에 이름을 붙이고 사이드바에서 다시 적용하며 이름 변경, 삭제, 전체 삭제로 관리합니다.",
    "feature.four.title": "일상 설정 조정",
    "feature.four.body":
      "앱 언어, 밝은/어두운 테마, 페이지당 결과 수를 설정하고 가져온 폴더별 로컬 데이터베이스 캐시 사용량을 확인합니다.",
    "gallery.eyebrow": "1.1 제품 둘러보기",
    "gallery.title": "빠른 찾기부터 정밀 필터링까지, 새로운 검색 화면",
    "gallery.description":
      "이 화면들은 2026년 5월 4일 준비된 1.1 스토어 자산에서 가져왔으며 저장된 검색, 고급 검색, 제외, 설정을 보여줍니다.",
    "gallery.one.tag": "고급 검색",
    "gallery.one.title": "키워드, 폴더, 확장자, 크기, 날짜 조합",
    "gallery.one.body":
      "고급 검색은 일반적인 필터를 한곳에 모아 쿼리 문법을 직접 작성하는 부담을 줄입니다.",
    "gallery.two.tag": "제외",
    "gallery.two.title": "초안, 캐시, 임시 파일을 결과에서 제외",
    "gallery.two.body":
      "제외 규칙은 인덱스를 바꾸지 않고 현재 결과에서 원하지 않는 위치만 제거합니다.",
    "gallery.three.tag": "설정",
    "gallery.three.title": "언어, 테마, 페이지, 로컬 캐시 제어",
    "gallery.three.body":
      "설정에는 이제 앱 언어, 외관, 페이지당 결과 수, 가져온 폴더별 로컬 데이터베이스 캐시 사용량이 포함됩니다.",
    "usecases.eyebrow": "워크플로",
    "usecases.title": "같은 작업 폴더를 반복해서 검색하는 사람을 위해 제작",
    "usecases.one": "build, cache, 임시 폴더를 제외하는 개발자",
    "usecases.two": "날짜와 확장자로 아카이브를 정리하는 연구자",
    "usecases.three": "크기로 큰 미디어 자산을 찾는 크리에이터",
    "usecases.four": "반복 로컬 쿼리를 저장하는 팀",
    "privacy.title": "로컬 인덱스, 저장된 검색, 설정을 투명하게 다룹니다",
    "privacy.subtitle":
      "최종 업데이트: 2026년 5월 4일. 이 정책은 앱과 이 웹사이트를 사용할 때 SearchFiles가 정보를 처리하는 방식을 설명합니다.",
    "privacy.highlight.two.title": "고급 검색도 로컬 메타데이터를 사용합니다",
    "privacy.highlight.two.body":
      "필터, 제외 하위 폴더, 저장된 검색은 로컬 데이터베이스의 메타데이터를 조회하며 파일 인덱스를 업로드하지 않습니다.",
    "privacy.highlight.three.title": "설정과 캐시 정보는 기기에 남습니다",
    "privacy.highlight.three.body":
      "언어, 테마, 페이지당 결과 수, 저장된 검색, 폴더별 데이터베이스 캐시 사용량은 로컬에서 처리됩니다.",
    "policy.one.body":
      "SearchFiles는 가져온 폴더의 폴더 이름, 파일 이름, 경로, 상대 경로, 확장자, 파일 크기, 생성 또는 수정 날짜를 처리할 수 있습니다. 또한 저장된 검색 이름, 쿼리 텍스트, 검색 범위, 언어, 테마, 페이지당 결과 수 같은 설정을 저장할 수 있습니다.",
    "policy.two.body":
      "SearchFiles는 현재 메타데이터 인덱싱을 중심으로 설계되어 있습니다. 검색을 위해 파일 내용을 의도적으로 읽지 않고, 광고 식별자를 포함하지 않으며, 일반적인 사용 중에 인덱스, 저장된 검색, 설정을 원격 서버로 보내지 않습니다.",
    "policy.three.body":
      "인덱싱된 메타데이터, 저장된 검색, 설정은 Mac에 로컬로 저장되며 일반적으로 앱의 Application Support 디렉터리와 샌드박스 컨테이너 안에 있습니다. 가져온 폴더를 제거하고 저장된 검색을 지우며 로컬 앱 데이터를 삭제할 수 있습니다.",
    "footer.description":
      "고급 메타데이터 필터링, 저장된 검색, 투명한 개인정보 경계에 집중한 macOS용 로컬 우선 파일 검색 앱입니다."
  }
};

Object.entries(version11Copy).forEach(([locale, copy]) => {
  Object.assign(translations[locale], copy);
});

const altText = {
  "zh-Hans": {
    hero: "SearchFiles 应用概览截图",
    overview: "SearchFiles 概览界面截图",
    size: "SearchFiles 文件大小筛选截图",
    code: "SearchFiles 代码目录搜索截图"
  },
  "zh-Hant": {
    hero: "SearchFiles 應用程式概覽截圖",
    overview: "SearchFiles 概覽介面截圖",
    size: "SearchFiles 檔案大小篩選截圖",
    code: "SearchFiles 程式碼目錄搜尋截圖"
  },
  en: {
    hero: "SearchFiles overview screenshot",
    overview: "SearchFiles overview screenshot",
    size: "SearchFiles size filter screenshot",
    code: "SearchFiles code search screenshot"
  },
  fr: {
    hero: "Capture d'écran de l'aperçu SearchFiles",
    overview: "Capture d'écran de l'aperçu SearchFiles",
    size: "Capture d'écran du filtre de taille SearchFiles",
    code: "Capture d'écran de recherche de code SearchFiles"
  },
  de: {
    hero: "SearchFiles Übersichts-Screenshot",
    overview: "SearchFiles Übersichts-Screenshot",
    size: "SearchFiles Screenshot des Größenfilters",
    code: "SearchFiles Screenshot der Codesuche"
  },
  ja: {
    hero: "SearchFiles の概要スクリーンショット",
    overview: "SearchFiles の概要スクリーンショット",
    size: "SearchFiles のサイズフィルタースクリーンショット",
    code: "SearchFiles のコード検索スクリーンショット"
  },
  it: {
    hero: "Screenshot panoramica di SearchFiles",
    overview: "Screenshot panoramica di SearchFiles",
    size: "Screenshot filtro dimensioni di SearchFiles",
    code: "Screenshot ricerca codice di SearchFiles"
  },
  pt: {
    hero: "Captura de tela da visão geral do SearchFiles",
    overview: "Captura de tela da visão geral do SearchFiles",
    size: "Captura de tela do filtro por tamanho do SearchFiles",
    code: "Captura de tela da busca em código do SearchFiles"
  },
  es: {
    hero: "Captura de la vista general de SearchFiles",
    overview: "Captura de la vista general de SearchFiles",
    size: "Captura del filtro por tamaño de SearchFiles",
    code: "Captura de búsqueda de código de SearchFiles"
  },
  ko: {
    hero: "SearchFiles 개요 스크린샷",
    overview: "SearchFiles 개요 스크린샷",
    size: "SearchFiles 크기 필터 스크린샷",
    code: "SearchFiles 코드 검색 스크린샷"
  }
};

const version11AltText = {
  "zh-Hans": {
    hero: "SearchFiles 1.1 快速搜索与保存搜索截图",
    overview: "SearchFiles 1.1 高级搜索截图",
    size: "SearchFiles 1.1 排除子目录截图",
    code: "SearchFiles 1.1 设置页截图"
  },
  "zh-Hant": {
    hero: "SearchFiles 1.1 快速搜尋與儲存搜尋截圖",
    overview: "SearchFiles 1.1 進階搜尋截圖",
    size: "SearchFiles 1.1 排除子資料夾截圖",
    code: "SearchFiles 1.1 設定頁截圖"
  },
  en: {
    hero: "SearchFiles 1.1 fast search and saved search screenshot",
    overview: "SearchFiles 1.1 Advanced Search screenshot",
    size: "SearchFiles 1.1 subfolder exclusion screenshot",
    code: "SearchFiles 1.1 Settings screenshot"
  },
  fr: {
    hero: "Capture SearchFiles 1.1 avec recherche rapide et recherche enregistrée",
    overview: "Capture SearchFiles 1.1 de la recherche avancée",
    size: "Capture SearchFiles 1.1 des exclusions de sous-dossiers",
    code: "Capture SearchFiles 1.1 des réglages"
  },
  de: {
    hero: "SearchFiles 1.1 Screenshot mit schneller Suche und gespeicherter Suche",
    overview: "SearchFiles 1.1 Screenshot der erweiterten Suche",
    size: "SearchFiles 1.1 Screenshot der Unterordner-Ausschlüsse",
    code: "SearchFiles 1.1 Screenshot der Einstellungen"
  },
  ja: {
    hero: "SearchFiles 1.1 の高速検索と保存済み検索スクリーンショット",
    overview: "SearchFiles 1.1 の詳細検索スクリーンショット",
    size: "SearchFiles 1.1 のサブフォルダ除外スクリーンショット",
    code: "SearchFiles 1.1 の設定スクリーンショット"
  },
  it: {
    hero: "Screenshot SearchFiles 1.1 con ricerca rapida e ricerca salvata",
    overview: "Screenshot SearchFiles 1.1 della ricerca avanzata",
    size: "Screenshot SearchFiles 1.1 delle esclusioni di sottocartelle",
    code: "Screenshot SearchFiles 1.1 delle impostazioni"
  },
  pt: {
    hero: "Captura do SearchFiles 1.1 com busca rápida e busca salva",
    overview: "Captura do SearchFiles 1.1 da busca avançada",
    size: "Captura do SearchFiles 1.1 de exclusões de subpastas",
    code: "Captura do SearchFiles 1.1 das configurações"
  },
  es: {
    hero: "Captura de SearchFiles 1.1 con búsqueda rápida y búsqueda guardada",
    overview: "Captura de SearchFiles 1.1 de búsqueda avanzada",
    size: "Captura de SearchFiles 1.1 de exclusión de subcarpetas",
    code: "Captura de SearchFiles 1.1 de ajustes"
  },
  ko: {
    hero: "SearchFiles 1.1 빠른 검색 및 저장된 검색 스크린샷",
    overview: "SearchFiles 1.1 고급 검색 스크린샷",
    size: "SearchFiles 1.1 하위 폴더 제외 스크린샷",
    code: "SearchFiles 1.1 설정 스크린샷"
  }
};

Object.entries(version11AltText).forEach(([locale, copy]) => {
  Object.assign(altText[locale], copy);
});

const textNodes = [...document.querySelectorAll("[data-i18n]")];
const pageDescription = document.querySelector('meta[name="description"]');
const footerYear = document.getElementById("footer-year");
const heroImage = document.getElementById("hero-image");
const galleryOverview = document.getElementById("gallery-image-overview");
const gallerySize = document.getElementById("gallery-image-size");
const galleryCode = document.getElementById("gallery-image-code");
const downloadButton = document.getElementById("download-button");
const languageSelect = document.getElementById("language-select");
const appleAppId = "6762038997";
const macAppStoreUrl = `macappstore://itunes.apple.com/app/id${appleAppId}?mt=12`;
const webAppStoreUrl = `https://apps.apple.com/app/id${appleAppId}?mt=12`;

function isMacOS() {
  const platformHint = [
    navigator.userAgentData?.platform,
    navigator.platform,
    navigator.userAgent
  ]
    .filter(Boolean)
    .join(" ");

  return /Mac/i.test(platformHint);
}

function getLanguageCode(language) {
  const normalizedLanguage = String(language || "").trim().toLowerCase();

  if (!normalizedLanguage) {
    return "";
  }

  return languageAliases[normalizedLanguage] || languageAliases[normalizedLanguage.split("-")[0]] || "";
}

function getPreferredBrowserLanguage() {
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];

  return browserLanguages.map(getLanguageCode).find(Boolean);
}

function setLanguage(language) {
  const locale = getLanguageCode(language) || "en";
  const copy = translations[locale] || translations.en;
  const imageAltText = altText[locale] || altText.en;
  const meta = languageMeta[locale] || languageMeta.en;

  document.documentElement.lang = meta.htmlLang;
  document.title = copy.pageTitle;
  pageDescription?.setAttribute("content", copy.pageDescription);
  languageSelect?.setAttribute("aria-label", copy["language.switcher"]);

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  if (heroImage) {
    heroImage.alt = imageAltText.hero;
  }

  if (galleryOverview) {
    galleryOverview.alt = imageAltText.overview;
  }

  if (gallerySize) {
    gallerySize.alt = imageAltText.size;
  }

  if (galleryCode) {
    galleryCode.alt = imageAltText.code;
  }

  if (languageSelect) {
    languageSelect.value = locale;
  }

  window.localStorage.setItem("searchfiles-language", locale);
}

languageSelect?.addEventListener("change", () => setLanguage(languageSelect.value));

if (downloadButton) {
  downloadButton.href = webAppStoreUrl;

  downloadButton.addEventListener("click", (event) => {
    if (!isMacOS()) {
      return;
    }

    event.preventDefault();

    const fallbackTimer = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.href = webAppStoreUrl;
      }
    }, 900);

    const clearFallback = () => {
      window.clearTimeout(fallbackTimer);
    };

    document.addEventListener("visibilitychange", clearFallback, { once: true });
    window.location.href = macAppStoreUrl;
  });
}

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

const storedLanguage = window.localStorage.getItem("searchfiles-language");
setLanguage(getLanguageCode(storedLanguage) || getPreferredBrowserLanguage() || "en");
