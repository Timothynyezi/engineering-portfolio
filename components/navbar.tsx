'use client'

import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-accent hover:text-secondary transition-colors">
            TTN
          </Link>
          
          <div className="hidden md:flex gap-8">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Link href="#contact" className="hidden sm:inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-secondary transition-colors font-medium">
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  )
}
