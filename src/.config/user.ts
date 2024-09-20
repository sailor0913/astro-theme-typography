import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: '须知少时凌云志，曾许人间第一流',
    subtitle: '须知少时凌云志，曾许人间第一流',
    author: 'sailor0913',
    description: '热爱生活，享受生活',
    website: 'https://lovehxy.com',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/sailor0913',
      },
      {
        name: 'twitter',
        href: 'https://x.com/juventusryp',
      },
      {
        name: 'bilibili',
        href: 'https://space.bilibili.com/479305033',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/posts/page/1',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Study',
        href: '/study',
      },
    ],
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],
  },
  comment: {
    giscus: {
      repo: 'sailor0913/sailor0913.github.io',
      repoId: 'R_kgDOMEaWdA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOMEaWdM4Cifxa',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'preferred_color_scheme',
      lang: 'zh-CN',
      loading: 'lazy',
    },
  },
  rss: {
    fullText: true,
  },
}
