import { Logo } from '../header/Logo'
import { Socials } from '../socials/Socials'

export function Sidebar() {
	return (
		<aside className='fixed flex justify-center items-end px-2 pb-4 w-20 bg-bg border-r border-primary h-full'>
			<div className='flex flex-col justify-between items-center h-full'>
				<Logo />
				<Socials />
			</div>
		</aside>
	)
}
