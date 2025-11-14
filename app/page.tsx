import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProjectGrid } from '@/components/project-grid'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { BlogSection } from '@/components/blog-section'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <AboutSection />
      <SkillsSection />
      <BlogSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
