import { NextRequest, NextResponse } from 'next/server'

import { THEME_COOKIE } from '../../components/theme/theme-cookie'
import { PAGE } from '../../config/public-page.config'

export function themeMiddleware(req: NextRequest) {
	const theme = req.cookies.get(THEME_COOKIE)?.value ?? 'light'
	const res = NextResponse.next()
	res.cookies.set(THEME_COOKIE, theme, { path: PAGE.HOME })
	return res
}

export const config = {
	matcher: '/((?!_next/static|_next/image|favicon.ico).*)'
}
