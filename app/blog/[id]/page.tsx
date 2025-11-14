import { BLOG_POSTS } from '@/lib/blog'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = BLOG_POSTS.find(p => p.id === id)

  if (!post) {
    return { title: 'Article Not Found' }
  }

  return {
    title: `${post.title} | Thamsanqa Timothy Nyezi`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      authors: [post.author]
    }
  }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({
    id: post.id
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = BLOG_POSTS.find(p => p.id === id)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-accent hover:text-secondary transition-colors">
            TTN
          </Link>
        </div>
      </nav>

      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              <span className="text-foreground/60 text-sm">{post.readTime} min read</span>
            </div>

            <h1 className="text-5xl font-bold mb-4 text-balance leading-tight">{post.title}</h1>

            <div className="flex items-center gap-4 text-foreground/70 mb-8">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formattedDate}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-card border border-border rounded text-sm text-accent">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div
              className="text-foreground/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) {
                      return `<h2 class="text-3xl font-bold mt-8 mb-4 text-accent">${line.slice(2)}</h2>`
                    }
                    if (line.startsWith('## ')) {
                      return `<h3 class="text-2xl font-bold mt-6 mb-3 text-accent">${line.slice(3)}</h3>`
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="ml-6">${line.slice(2)}</li>`
                    }
                    if (line.startsWith('```')) {
                      return '<pre class="bg-card p-4 rounded border border-border overflow-x-auto mb-4"><code>'
                    }
                    if (line === '```') {
                      return '</code></pre>'
                    }
                    return line ? `<p>${line}</p>` : ''
                  })
                  .join('')
              }}
            />
          </div>

          {/* Navigation */}
          <div className="border-t border-border pt-8">
            <Link
              href="/#blog"
              className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              ← Back to Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
