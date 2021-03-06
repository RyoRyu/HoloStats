import type { Translations } from "./data";

import locale from "@angular/common/locales/en";
import dateFnsLocale from "date-fns/locale/en-US";

const translations: Translations = {
  // UI
  updatedAt: "Updated at {$INTERPOLATION}",
  name: "Name",
  total: "Total",
  subscribers: "Subscribers",
  views: "Views",
  lastDay: "Last Day",
  last7Days: "Last 7 Days",
  last30Days: "Last 30 Days",
  youtubeChannel: "YouTube Channel",
  bilibiliChannel: "Bilibili Channel",
  youtubeStream: "YouTube Stream",
  youtubeSchedule: "YouTube Schedule",
  settings: "Settings",
  toggleDarkMode: "Toggle Dark Mode",
  averageViewers: "Average Viewers",
  maximumViewers: "Maximum Viewers",
  streamHasEnded: "Stream has ended",
  streaming: "Streaming",
  streamStartTime: "Start Time",
  streamDuration: "Duration",
  youtubeSubscribers: "YouTube Subscribers",
  bilibiliSubscribers: "Bilibili Subscribers",
  youtubeViews: "YouTube Views",
  bilibiliViews: "Bilibili Views",
  vtuberSelected: "VTuber Selected",
  selectLanguage: "Select Language",
  recentStreams: "Recent Streams",
  streamViewers: "Stream Viewers",

  // VTubers
  aoi: "夏日葵",
  asa: "Asa Ifrit Ch.",
  haruka: "星見遙 Haruka",
  hoonie: "β虎妮 Hoonie friends",
  ikusen: "いくせん Ikusen",
  kaina: "灰名 Kaina",
  kurita: "鼠屋栗太 Kurita",
  kwakon: "小空 KITSUNEKON",
  miru: "杏仁ミル Annin Miru",
  nyoro: "香草奈若 Vanilla Nyoro",
  rana: "鳥羽樂奈 TobaRana",
  rayer: "蕾兒 Rayer",
  ruroro: "璐洛洛 Ruroro",
  shaya: "莎亞 Shaya",
  tedobear: "虛擬熊頭 TedoBear",
  tsmatch: "火柴 TSMATCH",
  ubye: "悠白 Ubye",
  usagi: "兔姬 USAGIHIME CLUB.",
  yumemi: "雲之上夢見 YumemiChannel",
  yuna: "水野魚娜 Mizuno yuna",

  // Batches
  acclaim: "Acclaim 事務所",
  acg: "ACG稽查員 ACGInspector",
  cyberlive: "CyberLive",
  kolhunter: "網紅獵人 KOL Hunter",
  yahoo: "Yahoo",
  yenz: "艷世設計 YENZdesign",
};

export { locale, dateFnsLocale, translations };
