// ResumeItem.tsx
import { ReactNode } from 'react'

import { ResumeTitle } from './resumeTitle'
import { ResumeItemsText } from './resumeItemsText'

interface ResumeItemProps {
	title: ReactNode
	source: ReactNode
}

export function ResumeItem({ title, source }: ResumeItemProps) {
	return (
		<div className='flex flex-col gap-[1rem]'>
			<ResumeTitle>{title}</ResumeTitle>
      <ResumeItemsText>{source}</ResumeItemsText>
		</div>
	)
}
