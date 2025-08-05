import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { IMenuItem } from './menu.types'

interface Props {
	item: IMenuItem
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
  isActive: boolean
}

export function MenuItem({ item, onClick, isActive}: Props) {
	const Icon = item.icon

	return (
		<Link
			href={item.link}
			title={item.title}
			onClick={onClick}
		>
			<li className='flex gap-2 items-center justify-center max-md:flex-row-reverse'>
				<span
					className={twMerge(
						'text-2xl text-primary hover:text-accent transition-colors duration-200 max-xxs:text-xl',
						isActive && 'text-accent'
					)}
				>
					{item.label}
				</span>
				{Icon && <Icon className='text-accent mt-0.5' />}
			</li>
		</Link>
	)
}
