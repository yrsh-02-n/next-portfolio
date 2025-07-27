import cn from 'clsx'
import { m } from 'framer-motion'
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
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h1 className={cn('text-primary flex items-center text-4xlxl mb-[2rem]', className)}>
				{children}
			</h1>
		</m.div>
	) : (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<h2 className={cn('text-primary flex items-center text-3xl mb-[2rem]', className)}>
				{children}
			</h2>
		</m.div>
	)
}
