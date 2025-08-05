// ResumeItem.tsx
import { ReactNode } from 'react'

import { ResumeItemText } from './resume-text-items/ResumeItemText'
import { ResumeItemTitle } from './resume-text-items/ResumeItemTitle'

interface IResumeItemProps {
	title: ReactNode
	source: ReactNode
}

export function ResumeItem({ title, source }: IResumeItemProps) {
	return (
		<div className='flex flex-col gap-[1rem]'>
			<ResumeItemTitle>{title}</ResumeItemTitle>
			<ResumeItemText>{source}</ResumeItemText>
		</div>
	)
}
