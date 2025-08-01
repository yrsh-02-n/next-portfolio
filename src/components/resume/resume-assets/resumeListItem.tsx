// ResumeItem.tsx
import { ReactNode } from 'react'

import { ResumeTitle } from './resumeTitle'

interface ResumeListItemProps {
	title: ReactNode
  children: ReactNode
  className?: string
}

export function ResumeListItem({ title, children, className}: ResumeListItemProps) {
	return (
		<div className='flex flex-col gap-[1rem]'>
			<ResumeTitle>{title}</ResumeTitle>
			<ul className='flex gap-[2rem]'>{children}</ul>
		</div>
	)
}
