'use client'

import { useState } from 'react'

import { BurgerBtn } from './BurgerBtn'
import { HeaderMenu } from './HeaderMenu'
import { Logo } from './Logo'
import { HEADER_DATA } from './header.data'
import { MobileMenu } from './nav/MobileMenu'

export function Header() {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false)

	return (
		<header className='flex items-center justify-between fixed w-full md:pr-5 border-b border-primary bg-bg/70 shrink-0 z-2'>
			<Logo />
			<HeaderMenu
				className='max-md:hidden gap-10'
				menu={HEADER_DATA}
			/>
			<MobileMenu className={!mobileMenuIsOpen ? 'translate-x-full' : 'translate-x-0'} />
			<BurgerBtn onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} />
		</header>
	)
}
