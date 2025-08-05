import { NextResponse } from 'next/server'
import { getSocials } from 'sanity/lib/queries'

export async function GET() {
	const data = await getSocials()
	return NextResponse.json(data)
}
