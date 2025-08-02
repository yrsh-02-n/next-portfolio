import { ReactNode } from 'react'

import { ResumeItemTitle } from '../resume-text-items/resumeItemTitle'

interface IResumeTimeluneProps {
	title: ReactNode
	children: ReactNode
}

export function ResumeTimeline({ title, children }: IResumeTimeluneProps) {
	return (
		<div className='flex flex-col gap-[1.5rem]'>
			<ResumeItemTitle>{title}</ResumeItemTitle>
			<div className='relative'>
				<div className='absolute top-[12px] bg-light h-[1px] w-full z-1'></div>
				<ul className='top-[-12px] flex justify-between'>{children}</ul>
			</div>
		</div>
	)
}
