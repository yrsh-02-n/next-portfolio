import cn from 'clsx'

import { ThemeSwitcher } from '../../ui/themeSwitcher/ThemeSwitcher'

import { MenuItem } from './nav/MenuItem'
import { IMenuItem } from './nav/menu.types'

interface IHeaderMenu {
	menu: IMenuItem[]
	className?: string
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export function HeaderMenu({ menu, className, onClick }: IHeaderMenu) {
	return (
		<nav className={cn('flex justify-end', className)}>
			<ul className={cn('flex', className)}>
				{menu.map(item => (
					<MenuItem
						key={item.link}
						item={item}
						onClick={onClick}
					/>
				))}
			</ul>
			<ThemeSwitcher />
		</nav>
	)
}
