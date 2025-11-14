'use client'

import { useState } from 'react'
import { PROJECTS, PROJECT_CATEGORIES, type Project } from '@/lib/projects'
import { ProjectCard } from './project-card'

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory)

  const featuredProjects = PROJECTS.filter(p => p.featured)
  const otherProjects = filteredProjects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl">
            A selection of projects showcasing backend development, frontend skills, DevOps expertise, and data engineering capabilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Projects - Show all featured ones at top */}
        {selectedCategory === 'all' && (
          <>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-accent">Highlighted Work</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {otherProjects.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Filtered Projects */}
        {selectedCategory !== 'all' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground/70 mb-4">No projects in this category yet.</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-accent hover:text-secondary transition-colors font-medium"
                >
                  View all projects
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
