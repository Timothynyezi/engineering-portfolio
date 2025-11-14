# Professional Portfolio Website

A modern, responsive portfolio website showcasing full-stack software engineering projects, technical expertise, and professional experience. Built with industry-standard technologies and deployed on Vercel.

## Live Demo

**[View Portfolio](https://your-portfolio-url.vercel.app)**

---

## Features

- 🎨 **Responsive Design** - Mobile-first, works on all devices
- 📱 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🚀 **Full-Stack** - Next.js frontend + API routes backend
- 📝 **Blog Section** - Technical articles and learning reflections
- 📧 **Contact Form** - Email submission with validation
- 🌙 **Dark Mode** - Eye-friendly interface
- ⚡ **Performance** - Optimized for speed and SEO
- 🔍 **SEO Ready** - Metadata, Open Graph, structured data

---

## Tech Stack

### Frontend
- **Next.js 16** - Full-stack React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components

### Backend & Data
- **Next.js API Routes** - Serverless backend functions
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation

### Deployment
- **Vercel** - Hosting and continuous deployment

### Tools
- **Git/GitHub** - Version control
- **ESLint** - Code quality
- **Prettier** - Code formatting

---

## Getting Started

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org))
- npm or yarn package manager
- Git ([Download](https://git-scm.com))

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Setup environment variables**
   \`\`\`bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   \`\`\`

4. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   
   Visit http://localhost:3000 to see the site.

### Environment Variables

Create `.env.local` file (template provided in `.env.example`):

\`\`\`env
# Required for future integrations
NEXT_PUBLIC_SITE_NAME=Thamsanqa Timothy Nyezi
NEXT_PUBLIC_SITE_DESCRIPTION=Software Engineer | Backend Specialist | Data Engineering
\`\`\`

**Never commit `.env.local` - it's in `.gitignore` by default**

---

## Project Structure

\`\`\`
portfolio-website/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout with metadata
│   ├── api/
│   │   └── contact/route.ts      # Contact form API endpoint
│   └── blog/
│       └── [id]/page.tsx         # Individual blog post pages
├── components/                   # Reusable React components
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── project-card.tsx
│   ├── about-section.tsx
│   ├── skills-section.tsx
│   ├── contact-form.tsx
│   └── footer.tsx
├── lib/                          # Utilities and data
│   ├── constants.ts              # Site configuration
│   ├── projects.ts               # Project showcase data
│   ├── blog.ts                   # Blog posts data
│   ├── resume-data.ts            # Resume information
│   ├── contact.ts                # Form validation schemas
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   ├── resume.pdf                # Your resume
│   └── projects/                 # Project screenshots
├── globals.css                   # Global styles and design tokens
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
\`\`\`

---

## Customization Guide

### Adding Your Projects

Edit `lib/projects.ts` to showcase your actual projects:

\`\`\`typescript
export const PROJECTS = [
  {
    id: 'my-project',
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    category: 'backend',
    link: 'https://github.com/your-repo',
    demo: 'https://live-demo.com',
    featured: true,
  },
  // ... more projects
]
\`\`\`

### Writing Blog Posts

Add articles to `lib/blog.ts`:

\`\`\`typescript
export const BLOG_POSTS = [
  {
    id: 'post-id',
    title: 'Article Title',
    excerpt: 'Brief description',
    content: '# Full markdown content here...',
    category: 'backend',
    published: new Date('2025-01-15'),
    readTime: '5 min read',
  },
  // ... more posts
]
\`\`\`

### Updating Your Info

Edit `lib/resume-data.ts` with your:
- Professional summary
- Technical skills
- Experience
- Education
- References

### Adding Your Resume

1. Save your resume as `resume.pdf`
2. Place in `/public/resume.pdf`
3. Download button automatically works

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   \`\`\`

2. **Go to [vercel.com](https://vercel.com)**
   - Sign in with GitHub
   - Click "Add New..." → "Project"
   - Select your portfolio repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Your site is live** at `https://YOUR_USERNAME.vercel.app`

### Custom Domain
- Buy domain from registrar (Namecheap, GoDaddy, etc.)
- In Vercel: Project Settings → Domains → Add custom domain
- Follow DNS setup instructions
- Site is now live at your domain

---

## Development

### Available Scripts

\`\`\`bash
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
\`\`\`

### Code Quality
- ESLint configured for code style
- TypeScript for type safety
- Prettier for consistent formatting

---

## Security & Best Practices

### Environment Variables
- **Never commit `.env.local`** - it's in `.gitignore`
- Use Vercel dashboard to set production environment variables
- For local development, create `.env.local` file (not tracked by git)

### Dependencies
- Regular updates: `npm update`
- Security audits: `npm audit`
- Check for vulnerabilities: `npm audit --production`

### API Security (Future Integration)
- Never expose API keys in client code
- Use environment variables for sensitive data
- Validate all form inputs server-side
- Implement rate limiting for APIs
- Use HTTPS only (Vercel handles this)

---

## Performance Optimization

- ⚡ **Next.js Image Optimization** - Automatic image compression
- 🎯 **SEO Metadata** - Open Graph, structured data
- 🚀 **Code Splitting** - Automatic route-based code splitting
- 📦 **CSS Optimization** - Tailwind purging unused styles

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Contributing

This is a personal portfolio, but feel free to fork and customize for your own use.

---

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## Contact

**Thamsanqa Timothy Nyezi**

- Email: [thaminyezi@gmail.com](mailto:thaminyezi@gmail.com)
- Phone: 073 126 7011
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com)
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- [Next.js](https://nextjs.org) - Full-stack framework
- [shadcn/ui](https://ui.shadcn.com) - React components
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Vercel](https://vercel.com) - Deployment platform

---

**Last Updated:** January 2025
\`\`\`

---

## 4. Create .env.example (For Documentation)