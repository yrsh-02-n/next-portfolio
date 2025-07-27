'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { SkeletonLoader } from '../ui/skeletonLoader/skeletonLoader'

import { ISocials } from './socials.types'

interface Props {
	className?: string
}

export function SocialsClient({ className }: Props) {
	const [links, setLinks] = useState<ISocials[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setIsLoading(true)
		fetch('/api/socials')
			.then(r => r.json())
			.then(data => {
				setLinks(data)
				setIsLoading(false)
			})
			.catch(error => {
				console.error('Error fetching social links:', error)
				setIsLoading(false)
			})
	}, [])

	if (isLoading) {
		return (
			<div className={cn('flex gap-3', className)}>
				<SkeletonLoader
					count={2}
					className='h-[40px] w-[40px] max-md:h-[14.5rem] max-s:[h-20rem] max-xs:h-[18rem]'
				/>
			</div>
		)
	}
	return (
		<div className={cn('flex gap-3', className)}>
			{links.map((link: ISocials) => (
				<Link
					key={link._id}
					href={link.url}
					aria-label={link.title}
					title={link.title}
					target={'_blank'}
					rel='noopener noreferrer'
					className='block'
				>
					<span className='flex w-[40px] h-[40px] justify-center bg-secondary transition-colors hover:bg-accent duration-200'>
						<Image
							src={link.icon}
							alt={link.title}
							width={25}
							height={25}
						/>
					</span>
				</Link>
			))}
		</div>
	)
}
