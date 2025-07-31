'use client'

import { m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import { Heading } from '../headings/Heading'
import { CaseCard } from '../ui/caseCard/CaseCard'
import { SkeletonLoader } from '../ui/skeletonLoader/skeletonLoader'
import { Slider } from '../ui/slider/Slider'

import { useSlidesCount } from '@/src/hooks/useSlidesCount'
import { IPortfolioCase } from '@/src/types/portfolioCase'

export function LastTenCases() {
	const [cases, setCases] = useState<IPortfolioCase[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const loaderItemsCount = useSlidesCount()
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		setIsLoading(true)
		fetch('api/portfolio/latest')
			.then(r => r.json())
			.then(data => {
				setCases(data)
				setIsLoading(false)
			})
			.catch(error => {
				setIsLoading(false)
				setError('Ошибка при загрузке портфолио. Пожалуйста, обновите страницу')
			})
	}, [])

	return (
		<section className='mb-[5rem]'>
			<m.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Heading
					isH1={false}
					className='mb-[3rem] text-primary'
				>
					Последние проекты в портфолио
				</Heading>
			</m.div>

			{isLoading ? (
				<div className='flex gap-[2.5rem] h-[26rem]'>
					<SkeletonLoader
						count={loaderItemsCount}
						className='h-full w-full'
					/>
				</div>
			) : (
				<div>
					<Slider>
						{cases.map(item => (
							<SwiperSlide
								key={item._id}
								className='h-auto'
							>
								<m.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className='h-full'
								>
									<CaseCard
										caseTitle={item.caseTitle || null}
										caseDescription={item.caseDescription || null}
										slug={item.slug || null}
										caseCategory={item.caseCategory || null}
										caseCardImage={item.caseCardImage}
									/>
								</m.div>
							</SwiperSlide>
						))}
					</Slider>
				</div>
			)}
			{error && (
				<div className='w-full flex flex-col items-center justify-center text-center'>
					<div className='text-[2rem] mb-[1rem]'>(╯°□°)╯︵ ┻━┻</div>
					<p className='text-2xl'>{error}</p>
				</div>
			)}
		</section>
	)
}
