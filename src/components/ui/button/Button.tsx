import cn from 'clsx'
import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string
	title?: string
	href: string
	children: ReactNode
	variable: 'main' | 'secondary'
}

export function Button({ className, title, href, children, variable = 'main', ...props }: Props) {
	return (
		<Link
			href={href}
			title={title}
			className={cn(
				'flex items-center gap-3 py-3 px-5 text-xl bg-primary hover:bg-accent hover:text-dark w-full text-bg relative transition-colors duration-300 group focus:bg-accent/50 focus:outline-0 group max-lg:text-lg',
				variable === 'secondary' &&
					'bg-transparent text-primary border border-primary hover:border-accent hover:text-dark',
				className
			)}
      {...props}
		>
			<span
				className={cn(
					'w-[0.85rem] h-[0.85rem] bg-bg transition-colors duration-300 group-hover:bg-dark',
					variable === 'secondary' && 'bg-primary group-hover:bg-dark'
				)}
			/>
			{children}
		</Link>
	)
}
