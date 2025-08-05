import { NextResponse } from 'next/server'
import { PORTFOLIO_CASES_BY_CATEGORYResult } from 'sanity.types'
import { client } from 'sanity/client'

import { PORTFOLIO_CASES_BY_CATEGORY } from '@/sanity/lib/queries'

export async function GET(request: Request) {
	try {
		const url = new URL(request.url)

		const categoryParam = url.searchParams.get('category')

		if (!categoryParam) {
			console.error('API route error: Missing category parameter')
			return NextResponse.json({ error: 'Missing category parameter' }, { status: 400 })
		}

		const category = categoryParam.toLowerCase()
		if (!['dev', 'design'].includes(category)) {
			console.error('API route error: Invalid category parameter:', category)
			return NextResponse.json(
				{ error: `Invalid category: ${category}. Must be 'dev' or 'design'.` },
				{ status: 400 }
			)
		}

		const cases: PORTFOLIO_CASES_BY_CATEGORYResult = await client.fetch(
			PORTFOLIO_CASES_BY_CATEGORY,
			{ category } // param as query
		)

		return NextResponse.json(cases)
	} catch (error: any) {
		console.error('API route error:', error)

		return NextResponse.json(
			{
				error: 'Failed to fetch portfolio cases',
				details: process.env.NODE_ENV === 'development' ? error.message : undefined
			},
			{ status: 500 }
		)
	}
}
