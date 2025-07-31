'use client'

import { useEffect, useState } from 'react'

import { BurgerBtn } from './BurgerBtn'
import { HeaderMenu } from './HeaderMenu'
import { Logo } from './Logo'
import { HEADER_DATA } from './header.data'
import { MobileMenu } from './nav/MobileMenu'

export function Header() {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false)

	// block page scroll behind menu
	useEffect(() => {
		if (mobileMenuIsOpen) {
			document.documentElement.classList.add('overflow-hidden')
		} else {
			document.documentElement.classList.remove('overflow-hidden')
		}
		// clear on unmount
		return () => document.documentElement.classList.remove('overflow-hidden')
	}, [mobileMenuIsOpen])

	return (
		<header className='flex items-center justify-between fixed w-full md:pr-10 border-b border-primary/40 bg-bg md:bg-bg/70 shrink-0 z-9999'>
			<Logo />
			<HeaderMenu
				className='max-md:hidden gap-10 items-center'
				menu={HEADER_DATA}
			/>
			<MobileMenu
				onClick={() => setMobileMenuIsOpen(false)}
				className={!mobileMenuIsOpen ? 'translate-x-full' : 'translate-x-0'}
			/>
			<BurgerBtn
				onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
				isOpen={mobileMenuIsOpen}
			/>
		</header>
	)
}
