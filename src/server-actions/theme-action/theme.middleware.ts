// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function themeMiddleware(req: NextRequest) {
	// read theme from cookies
	const theme = req.cookies.get('theme')?.value ?? 'light'
	// read theme ion from cookies
	const themeIcon = req.cookies.get('themeIcon')?.value ?? 'Moon'

	const res = NextResponse.next()

	// set cookies
	res.cookies.set('theme', theme, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax'
	})

	res.cookies.set('themeIcon', themeIcon, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax'
	})

	return res
}

export const config = {
	matcher: '/((?!_next/static|_next/image|favicon.ico).*)'
}
