'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { SkeletonLoader } from '../skeletonLoader/SkeletonLoader'

import { setServerTheme } from '@/server-actions/theme-action/themeAction'

export function ThemeSwitcher() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	const [icon, setIcon] = useState<'Moon' | 'Sun'>('Moon')
	const [mounted, setMounted] = useState(false)

	/* read cookies at first render */
	useEffect(() => {
		// read theme from cookies
		const cookieThemeValue = document.cookie
			.split('; ')
			.find(row => row.startsWith('theme='))
			?.split('=')[1] as 'light' | 'dark' | undefined

		const initialTheme = cookieThemeValue ?? 'light'
		setTheme(initialTheme)
		document.documentElement.classList.toggle('dark', initialTheme === 'dark')

		// read theme icon from cookies
		const cookieIconValue = document.cookie
			.split('; ')
			.find(row => row.startsWith('themeIcon='))
			?.split('=')[1] as 'Moon' | 'Sun' | undefined

		const initialIcon = cookieIconValue ?? 'Moon'
		setIcon(initialIcon)

		setMounted(true)
	}, [])

	const toggle = async () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light'
		const nextIcon = icon === 'Moon' ? 'Sun' : 'Moon'

		setTheme(nextTheme)
		setIcon(nextIcon)

		// save data
		await setServerTheme(nextTheme, nextIcon)
		document.documentElement.classList.toggle('dark', nextTheme === 'dark')
	}

	// render after component mount
	if (!mounted) {
		return (
			<SkeletonLoader
				count={1}
				className='w-[24px] h-[24px]'
			/>
		)
	}

	return (
		<button
			onClick={toggle}
			title='Сменить тему'
			className='text-primary max-md:absolute max-md:bottom-[-32] max-md:left-1.5 focus:outline-0'
		>
			{icon === 'Moon' ? (
				<Moon
					className='hover:text-accent transition-colors duration-200'
					size={24}
				/>
			) : (
				<Sun
					className='hover:text-accent transition-colors duration-200'
					size={24}
				/>
			)}
		</button>
	)
}
