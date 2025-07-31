'use server'

import { cookies } from 'next/headers'

export async function setServerTheme(theme: 'light' | 'dark', themeIcon: 'Moon' | 'Sun') {
	const cookieStore = await cookies()
	cookieStore.set('theme', theme, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax'
	})
	cookieStore.set('themeIcon', themeIcon, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax'
	})
}
