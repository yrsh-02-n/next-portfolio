// ResumeItem.tsx
import { ReactNode } from 'react'

import { ResumeItemTitle } from './resume-text-items/ResumeItemTitle'

interface IResumeListItemProps {
	title: ReactNode
	children: ReactNode
	className?: string
}

export function ResumeListItem({ title, children, className }: IResumeListItemProps) {
	return (
		<div className='flex flex-col gap-[1rem]'>
			<ResumeItemTitle>{title}</ResumeItemTitle>
			<ul className='flex gap-[1.8rem] shrink-0'>{children}</ul>
		</div>
	)
}
