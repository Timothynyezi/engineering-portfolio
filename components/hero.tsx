import Link from 'next/link'
import { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
            Final Year Software Engineer
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          {SITE_NAME}
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
          {SITE_TITLE}
        </p>

        <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
          {SITE_DESCRIPTION}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#projects" className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-secondary transition-all duration-200 font-medium">
            View My Projects
          </Link>
          <Link href="#contact" className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 rounded-lg transition-all duration-200 font-medium">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
