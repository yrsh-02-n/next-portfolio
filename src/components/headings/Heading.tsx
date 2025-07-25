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
		<h1 className={cn('text-primary flex items-center text-4xlxl mb-[2rem]', className)}>{children}</h1>
	) : (
		<h2 className={cn('text-primary flex items-center text-3xl mb-[2rem]', className)}>{children}</h2>
	)
}
