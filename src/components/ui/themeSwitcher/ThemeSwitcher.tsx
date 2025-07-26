'use client'

import cn from 'clsx'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { setServerTheme } from '@/src/server-actions/theme-action/themeAction'

interface Props {
	className: string
}

export function ThemeSwitcher({ className }: Props) {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	const [mounted, setMounted] = useState(false)

	/* read cookie at first render */
	useEffect(() => {
		const cookieValue = document.cookie
			.split('; ')
			.find(row => row.startsWith('theme='))
			?.split('=')[1] as 'light' | 'dark'

		const initial = cookieValue ?? 'light'
		setTheme(initial)
		document.documentElement.classList.toggle('dark', initial === 'dark')
		setMounted(true)
	}, [])

	const toggle = async () => {
		const next = theme === 'light' ? 'dark' : 'light'
		setTheme(next)
		await setServerTheme(next)
		document.documentElement.classList.toggle('dark', next === 'dark')
	}

	return (
		<button
			onClick={toggle}
			title='Сменить тему'
			className='text-primary max-md:absolute max-md:bottom-[-32] max-md:left-1.5 focus:outline-0 focus:text-accent/50'
		>
			{theme === 'light' ? (
				<Moon className='hover:text-accent transition-colors duration-200' />
			) : (
				<Sun className='hover:text-accent transition-colors duration-200' />
			)}
		</button>
	)
}
