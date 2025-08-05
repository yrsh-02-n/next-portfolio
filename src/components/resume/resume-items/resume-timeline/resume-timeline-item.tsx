import { m } from 'framer-motion'
import { ReactNode } from 'react'

import { ResumeItemText } from '../resume-text-items/resume-item-text'

interface IResumeTimelineItemProps {
	company: ReactNode
	jobTitle: ReactNode
	years: ReactNode
	index: number
}

export function ResumeTimelineItem({ company, jobTitle, years, index }: IResumeTimelineItemProps) {
	return (
		<m.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: index * 0.5 }}
		>
			<div className='flex flex-col max-xl:flex-row max-xl:gap-[1rem]'>
				<div className='relative min-w-[1.5rem] min-h-[1.5rem] h-[1.5rem] w-[1.5rem] rounded-full bg-accent mb-[1rem]' />
				<div className='flex flex-col'>
					<ResumeItemText className='leading-5 mb-[0.2rem]'>{company}</ResumeItemText>
					<ResumeItemText className='text-sm text-light/70'>{jobTitle}</ResumeItemText>
					<ResumeItemText className='text-sm text-light/70'>{years}</ResumeItemText>
				</div>
			</div>
		</m.div>
	)
}
