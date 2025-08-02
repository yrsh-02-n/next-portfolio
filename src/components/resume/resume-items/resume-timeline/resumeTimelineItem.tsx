import { ReactNode } from 'react'

import { ResumeItemText } from '../resume-text-items/resumeItemText'
import { ResumeItemTitle } from '../resume-text-items/resumeItemTitle'

interface IResumeTimelineItemProps {
	company: ReactNode
	jobTitle: ReactNode
	years: ReactNode
}

export function ResumeTimelineItem({ company, jobTitle, years }: IResumeTimelineItemProps) {
	return (
		<div className='flex flex-col'>
      <div className='relative w-[1.5rem] h-[1.5rem] rounded-full bg-accent mb-[1rem]'></div>
			<ResumeItemText>{company}</ResumeItemText>
			<ResumeItemText className='text-sm text-light/70'>{jobTitle}</ResumeItemText>
			<ResumeItemText className='text-sm text-light/70'>{years}</ResumeItemText>
		</div>
	)
}
