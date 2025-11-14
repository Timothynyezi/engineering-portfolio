import { SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Thamsanqa Timothy Nyezi</h3>
            <p className="text-foreground/70">Software Engineer | Backend Specialist | Data Engineering</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Location</h4>
            <p className="text-foreground/70">Cape Town, South Africa</p>
            <p className="text-foreground/70">Open to remote & relocation</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Connect</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-secondary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>© 2025 Thamsanqa Timothy Nyezi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
