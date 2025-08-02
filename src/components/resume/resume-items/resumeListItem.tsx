// ResumeItem.tsx
import { ReactNode } from 'react'
import { ResumeItemTitle } from './resume-text-items/resumeItemTitle'



interface IResumeListItemProps {
	title: ReactNode
	children: ReactNode
	className?: string
}

export function ResumeListItem({ title, children, className }: IResumeListItemProps) {
	return (
		<div className='flex flex-col gap-[1rem]'>
			<ResumeItemTitle>{title}</ResumeItemTitle>
			<ul className='flex gap-[2rem]'>{children}</ul>
		</div>
	)
}
