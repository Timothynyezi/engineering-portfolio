import { contactForSchema} from '@/lib/contact'
import { NextRequest, NextResponse} from 'next/server'

// For now, we'll log submissions and return success
// In production, integrate with Supabase to store submissions

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate data with Zod schema
    const validatedData = contactFormSchema.parse(body)

    // Store in Supabase database table 'contact_submissions'
    // const supabase = createServerClient(...)
    // await supabase.from('contact_submissions').insert([validatedData])

    // Send email via Resend API
    // await resend.emails.send({...})

    // Log submission (for development)
    console.log('[CONTACT] New submission:', {
      name: validatedData.name,
      email: validatedData.email,
      type: validatedData.type,
      timestamp: new Date().toISOString()
    })