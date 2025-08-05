import { NextResponse } from 'next/server'
import { getHeroScreenData } from 'sanity/lib/queries'

export async function GET() {
	const data = await getHeroScreenData()
	return NextResponse.json({
		text: data?.heroScreenTexts[0].line,
		links: data?.heroScreenLinks ?? []
	})
}
