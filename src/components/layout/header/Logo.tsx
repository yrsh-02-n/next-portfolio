import { House, LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { PAGE } from '@/src/config/public-page.config'

export function Logo() {
	return (
		<div className='flex items-center justify-center w-20 h-[4.55rem] border-r border-primary/40 z-1'>
			<Link
				href={PAGE.HOME}
				title='Вернуться на главную страницу'
			>
				<House
					size={28}
					className='text-primary hover:text-accent transition-colors duration-200'
				/>
			</Link>
		</div>
	)
}
