import { ReactNode } from 'react'

export function ResumeTitle({ children }: { children: ReactNode }) {
	return <p className='text-xl font-md'>{children}</p>
}
