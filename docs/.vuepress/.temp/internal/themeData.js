export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "plugins": [
    [
      "@vuepress/register-components",
      {
        "componentDir": "./components"
      }
    ]
  ],
  "sidebar": [
    {
      "text": "介绍",
      "link": "/guide/"
    },
    {
      "text": "示例",
      "link": "/demo/"
    },
    {
      "text": "其他",
      "link": "/other/"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
