// ResumeItem.tsx
import { ReactNode } from 'react'

import { ResumeItemTitle } from './resume-text-items/resume-item-title'

interface IResumeListItemProps {
	title: ReactNode
	children: ReactNode
	className?: string
}

export function ResumeListItem({ title, children, className }: IResumeListItemProps) {
	return (
		<div className='flex flex-col gap-[1rem]'>
			<ResumeItemTitle>{title}</ResumeItemTitle>
			<ul className='flex gap-[1.8rem] shrink-0 max-xl:flex-wrap max-xl:gap-y-[0.5rem] max-lg:gap-[1rem]'>
				{children}
			</ul>
		</div>
	)
}
