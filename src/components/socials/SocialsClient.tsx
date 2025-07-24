'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ISocials } from './socials.types'

interface Props {
	className?: string
}

export function SocialsClient({ className }: Props) {
	const [links, setLinks] = useState<ISocials[]>([])

	useEffect(() => {
		fetch('/api/socials')
			.then(r => r.json())
			.then(setLinks)
	}, [])

	return (
		<div className={cn('flex gap-3', className)}>
			{links.map(link => (
				<Link
					key={link._id}
					href={link.url}
					aria-label={link.title}
					title={link.title}
					target={'_blank'}
					rel='noopener noreferrer'
					className='block'
				>
					<span className='flex w-[40px] h-[40px] justify-center p-[.5rem] bg-secondary transition-colors hover:bg-accent duration-200'>
						<Image
							src={link.icon}
							alt={link.title}
							width={20}
							height={20}
						/>
					</span>
				</Link>
			))}
		</div>
	)
}
