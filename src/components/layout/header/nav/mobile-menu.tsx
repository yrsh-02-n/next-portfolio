import cn from 'clsx'

import { SocialsClient } from '@/components/socials/Socials'

import { HeaderMenu } from '../header-menu'
import { HEADER_DATA } from '../header.data'

interface Props {
	className: string
	onClick: React.MouseEventHandler<HTMLAnchorElement>
}

export function MobileMenu({ className, onClick }: Props) {
	return (
		<div
			className={cn(
				'fixed flex flex-col justify-between inset-0 mt-[4.64rem] bg-bg p-5 z-1 h-[100%-73px] transition-transform duration-500 ease-in-out shadow-[-3px_3px_6px_0px_rgba(51,_65,_85,_0.12)]',
				className
			)}
		>
			<HeaderMenu
				menu={HEADER_DATA}
				className='relative w-full flex flex-col items-end gap-6 h-full mt-5'
				onClick={onClick}
			/>
			<SocialsClient className='justify-end' />
		</div>
	)
}
