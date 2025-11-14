import { SKILLS } from '@/lib/constants'

interface SkillCategory {
  title: string
  icon: string
  skills: string[]
  description: string
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: SKILLS.backend,
    description: 'Building scalable server-side systems'
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: SKILLS.frontend,
    description: 'Creating interactive user interfaces'
  },
  {
    title: 'DevOps & Infrastructure',
    icon: '🐳',
    skills: SKILLS.devops,
    description: 'Containerization and deployment automation'
  },
  {
    title: 'Data Engineering',
    icon: '📊',
    skills: SKILLS.data,
    description: 'ETL pipelines and data optimization'
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Technical Skills</h2>
          <p className="text-foreground/70 text-center max-w-2xl mx-auto">
            A comprehensive toolkit developed through hands-on experience in software development, system architecture, and modern DevOps practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-accent">{category.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{category.description}</p>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-foreground/80 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent/60" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="bg-background border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-accent">Proficiency Matrix</h3>
          <div className="space-y-6">
            {[
              { tech: 'Java & Spring Boot', level: 90 },
              { tech: 'Python', level: 85 },
              { tech: 'SQL & Database Design', level: 88 },
              { tech: 'Angular & Frontend', level: 80 },
              { tech: 'Docker & Linux', level: 82 },
              { tech: 'Git & Version Control', level: 92 }
            ].map((item) => (
              <div key={item.tech}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{item.tech}</span>
                  <span className="text-accent">{item.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
