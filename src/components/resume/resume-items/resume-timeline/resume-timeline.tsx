import { ReactNode } from 'react'

import { ResumeItemTitle } from '../resume-text-items/resume-item-title'

interface IResumeTimeluneProps {
	title: ReactNode
	children: ReactNode
}

export function ResumeTimeline({ title, children }: IResumeTimeluneProps) {
	return (
		<div className='flex flex-col gap-[1.5rem]'>
			<ResumeItemTitle>{title}</ResumeItemTitle>
			<div className='relative'>
				<div className='absolute top-[12px] bg-light h-[1px] w-full z-0 max-xl:h-[85%] max-xl:w-[1px] max-xl:left-[0.73rem]' />
				<ul className='top-[-12px] flex justify-between max-xl:flex-col max-xl:gap-[2rem]'>
					{children}
				</ul>
			</div>
		</div>
	)
}
