import cn from 'clsx'
import { MouseEvent } from 'react'
import { twMerge } from 'tw-merge'

interface Props {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
	isOpen: boolean
}

export function BurgerBtn({ onClick, isOpen }: Props) {
	return (
		<button
			className='p-5 md:hidden'
			onClick={onClick}
			title='Меню сайта'
		>
			<div className='relative flex flex-col gap-4 items-end transition-transform duration-500'>
				<span
					className={cn(
						'block bg-primary w-8 h-[0.15rem] transition-transform duration-500',
						isOpen ? '-rotate-[135deg] translate-x-[7px] translate-y-[10px]' : ''
					)}
				></span>
				<span
					className={cn(
						'block bg-primary w-8 h-[0.15rem] transition-transform duration-500',
						isOpen ? 'rotate-[135deg] translate-x-[7px] -translate-y-[9px]' : ''
					)}
				></span>
			</div>
		</button>
	)
}
