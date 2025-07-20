import { MenuItem } from '../menu/MenuItem'
import { IMenuItem } from '../menu/menu.types'

export function HeaderMenu({ menu }: { menu: IMenuItem[] }) {
	return (
		<div className='flex items-end justify-end'>
			<nav>
				<ul className='flex gap-10'>
					{menu.map(item => (
						<MenuItem
							key={item.link}
							item={item}
						/>
					))}
				</ul>
			</nav>
		</div>
	)
}
