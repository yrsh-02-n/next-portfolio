// ResumeItem.tsx
import { ReactNode } from 'react'
import { ResumeItemTitle } from './resume-text-items/resumeItemTitle'
import { ResumeItemText } from './resume-text-items/resumeItemText'




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
