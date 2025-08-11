import { ReactNode } from 'react'

export function ResumeItemTitle({ children }: { children: ReactNode }) {
	return <p className='bg-primary/30 py-[.4rem] px-[.5rem] w-fit text-xl font-md'>{children}</p>
}
