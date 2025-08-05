'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'

import { useActiveSectionByIntersection } from '@/hooks/useActiveSectionByIntersection'

import { ThemeSwitcher } from '../../ui/themeSwitcher/ThemeSwitcher'

import { MenuItem } from './nav/MenuItem'
import { IMenuItem } from './nav/menu.types'

interface IHeaderMenu {
	menu: IMenuItem[]
	className?: string
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const SECTION_IDS = ['about']

export function HeaderMenu({ menu, className, onClick }: IHeaderMenu) {
	const pathName = usePathname()
	const activeSectionId = useActiveSectionByIntersection(SECTION_IDS)

	return (
		<nav className={cn('flex justify-end', className)}>
			<ul className={cn('flex', className)}>
				{menu.map(item => {
					// check for active item
					const isActive =
						pathName === item.link ||
						(item.link !== '/' && pathName.startsWith(item.link)) ||
						item.link === `/#${activeSectionId}`

					return (
						<MenuItem
							key={item.link}
							item={item}
							onClick={onClick}
							isActive={isActive}
						/>
					)
				})}
			</ul>
			<ThemeSwitcher />
		</nav>
	)
}
