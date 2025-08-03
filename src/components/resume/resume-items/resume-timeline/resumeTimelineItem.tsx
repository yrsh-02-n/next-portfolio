import { m } from 'framer-motion'
import { ReactNode } from 'react'

import { ResumeItemText } from '../resume-text-items/ResumeItemText'

interface IResumeTimelineItemProps {
	company: ReactNode
	jobTitle: ReactNode
	years: ReactNode
  index: number
}

export function ResumeTimelineItem({ company, jobTitle, years, index }: IResumeTimelineItemProps) {
	return (
		<m.div
			initial={{ opacity: 0, x: -20  }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: index * 0.5 }}
		>
			<div className='flex flex-col'>
				<div className='relative w-[1.5rem] h-[1.5rem] rounded-full bg-accent mb-[1rem]'></div>
				<ResumeItemText>{company}</ResumeItemText>
				<ResumeItemText className='text-sm text-light/70'>{jobTitle}</ResumeItemText>
				<ResumeItemText className='text-sm text-light/70'>{years}</ResumeItemText>
			</div>
		</m.div>
	)
}
