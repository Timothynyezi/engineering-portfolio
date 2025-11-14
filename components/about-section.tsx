import Link from 'next/link'
import { RESUME_DATA } from '@/lib/resume-data'

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Professional Summary */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Professional Profile</h3>
              <p className="text-foreground/80 leading-relaxed">
                {RESUME_DATA.summary}
              </p>
            </div>

            {/* Key Strengths */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-accent">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Problem-solving & Debugging',
                  'Collaborative Development',
                  'System Architecture',
                  'Performance Optimization',
                  'Code Quality & Best Practices',
                  'Agile Methodologies',
                  'Container Orchestration',
                  'Data Pipeline Design'
                ].map((strength) => (
                  <div key={strength} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground/80">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-accent mb-2">Final Year</div>
              <p className="text-foreground/70">Software Engineering Diploma</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-accent mb-2">8+</div>
              <p className="text-foreground/70">Technologies Mastered</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-accent mb-2">2</div>
              <p className="text-foreground/70">Years in Tech</p>
            </div>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="block w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-secondary transition-colors font-medium text-center"
            >
              Download Resume
            </Link>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-8 text-accent">Education</h3>
          <div className="space-y-6">
            {RESUME_DATA.education.map((edu, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border hover:border-accent transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-accent font-medium">{edu.school}</p>
                  </div>
                  <span className="text-foreground/60 text-sm">{edu.year || edu.status}</span>
                </div>
                {edu.accreditation && (
                  <p className="text-foreground/70 text-sm mb-2">{edu.accreditation}</p>
                )}
                {edu.specialization && (
                  <p className="text-accent/80 text-sm mb-2">Specialization: {edu.specialization}</p>
                )}
                {edu.description && (
                  <p className="text-foreground/70 text-sm">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-8 text-accent">Experience</h3>
          <div className="space-y-6">
            {RESUME_DATA.experience.map((exp, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border hover:border-accent transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-foreground/60 text-sm whitespace-nowrap">{exp.period}</span>
                </div>
                {exp.location && (
                  <p className="text-foreground/70 text-sm mb-3">{exp.location}</p>
                )}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80 text-sm">
                      <span className="text-accent mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
