import { Link } from 'react-router-dom'

export function WelcomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl">
        Welcome to HueyNet
      </h1>
      <Link
        to="/home"
        className="rounded-xl bg-violet-600 px-8 py-3 text-base font-medium text-white shadow-sm transition hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
      >
        进入
      </Link>
    </main>
  )
}
