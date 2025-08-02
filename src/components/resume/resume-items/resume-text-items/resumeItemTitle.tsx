import { ReactNode } from 'react'

export function ResumeItemTitle({ children }: { children: ReactNode }) {
	return <p className='text-xl font-md'>{children}</p>
}
