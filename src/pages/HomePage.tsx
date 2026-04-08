import { Link } from 'react-router-dom'

import { posts } from '../data/posts'

export function HomePage() {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            我的博客
          </Link>
          <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400">
              文章
            </a>
            <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400">
              关于
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
          Personal blog
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          欢迎
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          基于 React 19 与 Tailwind CSS 的个人博客前端。在{' '}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
            src/pages/HomePage.tsx
          </code>{' '}
          中替换为真实文章列表或路由即可继续开发。
        </p>

        <ul className="mt-12 flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.title}>
              <article className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-violet-900/50">
                <time
                  dateTime={post.date}
                  className="text-sm text-zinc-500 dark:text-zinc-500"
                >
                  {post.date}
                </time>
                <h2 className="mt-2 text-xl font-semibold text-zinc-900 group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-300">
                  <a
                    href="#"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
                  >
                    {post.title}
                  </a>
                </h2>
                <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </main>

      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        © {new Date().getFullYear()} 个人博客
      </footer>
    </div>
  )
}
