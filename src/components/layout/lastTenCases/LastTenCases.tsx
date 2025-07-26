'use client'

import { SwiperSlide } from 'swiper/react'

import { Heading } from '../../headings/Heading'
import { CaseCard } from '../../ui/caseCard/CaseCard'
import { Slider } from '../../ui/slider/Slider'

// query

export function LastTenCases() {
	return (
		<section>
			<Heading isH1={false} className='mb-[3rem]'>Последние проекты в портфолио</Heading>
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
