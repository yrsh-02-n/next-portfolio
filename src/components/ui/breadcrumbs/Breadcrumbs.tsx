import cn from 'clsx'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface IBreadcrumbItem {
	label: string
	href?: string
	isCurrent?: boolean
}

interface IBreadcrumbsProps {
	items: IBreadcrumbItem[]
	className?: string
}

export function Breadcrumbs({ items, className }: IBreadcrumbsProps) {
	return (
		<nav className={cn('text-lg max-s:text-[1rem]', className)}>
			<ol className='flex items-center flex-wrap'>
				{items.map((item, index) => (
					<li
						key={index}
						className='flex items-center'
					>
						{item.isCurrent ? (
							<span className='text-primary truncate'>{item.label}</span>
						) : item.href ? (
							<Link
								href={item.href}
								className='text-primary hover:text-accent transition-colors truncate'
							>
								{item.label}
							</Link>
						) : (
							<span className='text-primary truncate'>{item.label}</span>
						)}

						{index < items.length - 1 && (
							<ChevronRight className='w-4 h-4 text-accent flex-shrink-0' />
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}
