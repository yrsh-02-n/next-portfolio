import cn from 'clsx'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface Props {
	className?: string
	isH1: boolean
	icon?: LucideIcon
	children: ReactNode
}

export function Heading({ className, isH1 = false, children }: Props) {
	return isH1 ? (
		<h1 className={cn('flex items-center text-4xl', className)}>
			{children}
		</h1>
	) : (
		<h2 className={cn('flex items-center text-3xl', className)}>
			{children}
		</h2>
	)
}
