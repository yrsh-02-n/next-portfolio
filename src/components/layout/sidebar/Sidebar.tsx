import { SocialsClient } from '../../socials/Socials'

export function Sidebar() {
	return (
		<aside className='fixed flex justify-center items-end px-2 pb-4 w-20 bg-bg/70 border-r border-primary/40 h-[calc(100%-73px)] max-md:hidden'>
			<div className='flex flex-col justify-end items-center h-full'>
				<SocialsClient className='flex-col' />
			</div>
		</aside>
	)
}
