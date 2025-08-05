import cn from 'clsx'
import { ReactNode } from 'react'

interface Props {
	onClick: () => void
	className?: string
	children: ReactNode
}

export function SliderNavButton({ className, onClick, children }: Props) {
	return (
		<div>
			<button
				onClick={onClick}
				className={cn('bg-primary text-bg p-[.5rem] hover:bg-accent hover:text-dark', className)}
			>
				{children}
			</button>
		</div>
	)
}
