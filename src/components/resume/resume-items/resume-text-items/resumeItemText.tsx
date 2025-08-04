import cn from 'clsx'
import { ReactNode } from 'react'

export interface IResumeItemTextProps {
	className?: string
	children: ReactNode
}

export function ResumeItemText({ children, className }: IResumeItemTextProps) {
	return <p className={cn('text-lg leading-5', className)}>{children}</p>
}
