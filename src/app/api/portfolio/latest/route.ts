import { NextResponse } from 'next/server'
import { client } from '@/sanity/client'

import { LATEST_PORTFOLIO_ITEMS } from '@/sanity/lib/queries'

export async function GET() {
	try {
		const data = await client.fetch(LATEST_PORTFOLIO_ITEMS)
		return NextResponse.json(data)
	} catch (error) {
		console.error('Error fetching latest portfolio items:', error)
		return NextResponse.json({ error: 'Failed to fetch portfolio items' }, { status: 500 })
	}
}
