import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Thamsanqa Timothy Nyezi | Software Engineer & Backend Specialist',
  description: 'Final-year software engineering student showcasing projects in Java, Spring Boot, Python, and Data Engineering. Backend specialist with DevOps expertise.',
  keywords: 'Software Engineer, Backend Developer, Java, Spring Boot, Python, Data Engineering, Portfolio',
  authors: [{ name: 'Thamsanqa Timothy Nyezi' }],
  openGraph: {
    title: 'Thamsanqa Timothy Nyezi | Software Engineer',
    description: 'Showcasing backend development and data engineering projects',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0F172A',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
