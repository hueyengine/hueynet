export type Post = {
  title: string
  excerpt: string
  date: string
}

export const posts: Post[] = [
  {
    title: '第一篇示例文章',
    excerpt: '在这里写摘要，或接入 Markdown / CMS 后由数据驱动渲染。',
    date: '2026-04-08',
  },
  {
    title: '使用 Tailwind 搭建布局',
    excerpt: '用 utility class 快速调整间距、排版与暗色模式。',
    date: '2026-04-01',
  },
]
