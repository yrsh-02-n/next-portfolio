'use client'

import { m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import { useSlidesCount } from '@/hooks/useSlidesCount'

import { Heading } from '../headings/Heading'
import { CaseCard } from '../ui/caseCard/CaseCard'
import { SkeletonLoader } from '../ui/skeletonLoader/SkeletonLoader'
import { Slider } from '../ui/slider/Slider'

import { IPortfolioCase } from '@/types/portfolioCase'

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
			<div>
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
				{!isLoading ? (
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
				) : (
					<div className='grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[3rem]'>
						<SkeletonLoader
							count={loaderItemsCount}
							className='h-[18rem]'
						/>
					</div>
				)}

				{error && (
					<div className='w-full flex flex-col items-center justify-center text-center'>
						<div className='text-[2rem] mb-[1rem]'>(╯°□°)╯︵ ┻━┻</div>
						<p className='text-2xl'>{error}</p>
					</div>
				)}
			</div>
		</section>
	)
}
