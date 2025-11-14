import Link from 'next/link'
import { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Link href={`/blog/${post.id}`}>
      <article className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer">
        {/* Category & Read Time */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
          <span className="text-foreground/60 text-xs">{post.readTime} min read</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-accent/70">
              #{tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="text-xs text-accent/70">+{post.tags.length - 2}</span>
          )}
        </div>

        {/* Date & Author */}
        <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-foreground/60">
          <span>{formattedDate}</span>
          <span>{post.author}</span>
        </div>
      </article>
    </Link>
  )
}
