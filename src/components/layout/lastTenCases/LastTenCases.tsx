'use client'

import { m } from 'framer-motion'
import { SwiperSlide } from 'swiper/react'

import { Heading } from '../../headings/Heading'
import { CaseCard } from '../../ui/caseCard/CaseCard'
import { Slider } from '../../ui/slider/Slider'

export function LastTenCases() {
	return (
		<section>
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
			<div>
				<Slider>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CaseCard
							title='Заголовок'
							description='Описание'
							url='/'
							imageUrl='/'
							alt='Проект'
						/>
					</SwiperSlide>
				</Slider>
			</div>
		</section>
	)
}
