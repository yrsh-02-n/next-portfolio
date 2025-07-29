'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../button/Button'

import { IPortfolioCase } from '@/src/types/portfolioCase'

export function CaseCard({
	slug,
	caseCardImage,
	caseCategory,
	caseDescription,
	caseTitle
}: IPortfolioCase) {
	// image placeholder
	const imageUrl = caseCardImage?.asset.url || '/placeholder-image.jpg'

	return (
		<div className='relative flex flex-col flex-1 h-full max-w-full bg-secondary/90 shadow'>
			<Link
				href={`/${caseCategory}/${slug.current}`}
				className={cn('bg-white aspect-[16/9]')}
			>
				<Image
					src={imageUrl}
					alt={`Проект ${caseTitle}`}
					width={1920}
					height={1080}
					className='max-w-full max-h-full object-contain'
				/>
			</Link>
			<div className='flex flex-col p-5 h-full'>
				<div className='mb-[1.5rem]'>
					<h3 className='text-2xl max-xl:text-xl font-md text-light leading-[1.2] mb-[1rem] line-clamp-2'>
						{caseTitle}
					</h3>
					<p className='text-lg text-light/70 leading-[1.2] line-clamp-2'>{caseDescription}</p>
				</div>
				<Button
					title={`Смотреть проект ${caseTitle}`}
					variable='main'
					href={`/${caseCategory}/${slug.current}`}
					className='mt-auto'
				>
					Смотреть
				</Button>
			</div>
		</div>
	)
}
