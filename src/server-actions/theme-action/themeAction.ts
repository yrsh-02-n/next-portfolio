'use server'

import { cookies } from 'next/headers'

import { PAGE } from '@/src/config/public-page.config'

const THEME_COOKIE = 'theme'

export async function setServerTheme(theme: 'light' | 'dark') {
	const cookieStore = await cookies()
	cookieStore.set(THEME_COOKIE, theme, {
		path: PAGE.HOME,
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax'
	})
}
