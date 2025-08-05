import { ReactNode } from 'react'
import cn from 'clsx'

interface IResumeItemWrapperProps {
	children: ReactNode
  className?: string
}

export function ResumeItemWrapper({ children, className }: IResumeItemWrapperProps) {
	return (
		<div className={cn('bg-secondary/90 p-[2rem] border-b border-accent', className)}>
			{children}
		</div>
	)
}
