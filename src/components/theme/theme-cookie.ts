import { cookies } from 'next/headers'

export const THEME_COOKIE = 'theme'

export async function getServerTheme(): Promise<'light' | 'dark'> {
	const cookieStore = await cookies()
	return cookieStore.get(THEME_COOKIE)?.value === 'dark' ? 'dark' : 'light'
}
