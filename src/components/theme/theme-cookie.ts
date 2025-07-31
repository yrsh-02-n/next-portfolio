import { cookies } from 'next/headers'

export const THEME_COOKIE = 'theme'
export const THEME_ICON_COOKIE = 'themeIcon'

export async function getServerTheme(): Promise<'light' | 'dark'> {
	const cookieStore = await cookies()
	return cookieStore.get(THEME_COOKIE)?.value === 'dark' ? 'dark' : 'light'
}

export async function getThemeIcon(): Promise<'Sun' | 'Moon'> {
	const cookieStore = await cookies()
	return cookieStore.get(THEME_ICON_COOKIE)?.value === 'Sun' ? 'Sun' : 'Moon'
}
