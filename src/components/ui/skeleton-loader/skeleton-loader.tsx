import cn from 'clsx'

interface Props {
	count: number
	className?: string
}

export function SkeletonLoader({ count = 1, className = '' }: Props) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className={cn('bg-secondary h-10 animate-pulse', className)}
				/>
			))}
		</>
	)
}
