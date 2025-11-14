import { contactFormSchema } from '@/lib/contact'
import { NextRequest, NextResponse } from 'next/server'

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

    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully. We will get back to you soon.',
        submission: {
          id: `contact_${Date.now()}`,
          ...validatedData,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT] Error:', error)

    // Handle validation errors
    if (error instanceof Error && error.message.includes('validation')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data. Please check your inputs.',
          error: error.message
        },
        { status: 400 }
      )
    }

    // Handle server errors
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process your request. Please try again later.'
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
