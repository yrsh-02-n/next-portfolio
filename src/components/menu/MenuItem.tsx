import Link from 'next/link'

import { IMenuItem } from './menu.types'

interface Props {
	item: IMenuItem
}

export function MenuItem({ item }: Props) {
	const Icon = item.icon

	return (
		<Link
			href={item.link}
			title={item.title}
		>
			<li className='flex gap-2 items-center justify-center'>
				<span className='text-2xl hover:text-accent transition-colors duration-200'>{item.label}</span>
				{Icon && <Icon className='text-accent mt-0.5' />}
			</li>
		</Link>
	)
}
