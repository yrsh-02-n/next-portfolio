import cn from 'clsx'

import { SocialsClient } from '../../socials/SocialsClient'
import { HeaderMenu } from '../HeaderMenu'
import { HEADER_DATA } from '../header.data'

interface Props {
	className: string
}

export function MobileMenu({ className }: Props) {
	return (
		<div
			className={cn(
				'fixed flex flex-col justify-between inset-0 mt-[4.65rem] bg-bg/90 p-5 z-1 h-[100%-73px] transition-transform duration-300 ease-in-out shadow',
				className
			)}
		>
			<HeaderMenu
				menu={HEADER_DATA}
				className='flex flex-col items-end gap-6 mt-5'
			/>
			<SocialsClient className='justify-end' />
		</div>
	)
}
