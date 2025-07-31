import Link from 'next/link'
import { AnchorHTMLAttributes, MouseEvent } from 'react'

import { IMenuItem } from './menu.types'

interface Props {
	item: IMenuItem
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export function MenuItem({ item, onClick }: Props) {
	const Icon = item.icon

	return (
		<Link
			href={item.link}
			title={item.title}
			onClick={onClick}
		>
			<li className='flex gap-2 items-center justify-center max-md:flex-row-reverse'>
				<span className='text-2xl text-primary hover:text-accent transition-colors duration-200 max-xxs:text-xl'>
					{item.label}
				</span>
				{Icon && <Icon className='text-accent mt-0.5' />}
			</li>
		</Link>
	)
}
