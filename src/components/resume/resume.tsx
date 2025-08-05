'use client'

import { m } from 'framer-motion'
import { PortableText } from 'next-sanity'
import { useEffect, useState } from 'react'
import { ResumeType } from 'sanity.types'

import { getAge } from '@/utils/getAge'

import { Heading } from '../headings/Heading'

import { ResumeLoader } from './ResumeLoader'
import { ResumeItem } from './resume-items/ResumeItem'
import { ResumeItemWrapper } from './resume-items/ResumeItemWrapper'
import { ResumeListItem } from './resume-items/ResumeListItem'
import { ResumeItemText } from './resume-items/resume-text-items/ResumeItemText'
import { ResumeTimeline } from './resume-items/resume-timeline/ResumeTimeline'
import { ResumeTimelineItem } from './resume-items/resume-timeline/ResumeTimelineItem'

export function Resume() {
	const [data, setData] = useState<ResumeType>()
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const age = getAge(1992)

	useEffect(() => {
		fetch('/api/resume')
			.then(r => r.json())
			.then(data => {
				setData(data)
				setIsLoading(false)
			})
			.catch(error => {
				setIsLoading(false)
				setError('Ошибка при загрузке резюме. Пожалуйста, обновите страницу')
			})
	}, [])

	return (
		<section className='flex flex-col text-light mb-[5rem]'>
			<m.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Heading
					isH1={false}
					className='mb-[3rem] text-primary'
				>
					Краткое резюме
				</Heading>
			</m.div>
			{isLoading ? (
				<ResumeLoader />
			) : (
				<div>
					<div className='flex mb-[2rem] gap-[2rem] max-[1060px]:flex-wrap'>
						<ResumeItemWrapper className='flex w-fit gap-[2rem] shrink-0 max-xl:flex-wrap max-xl:shrink-1 max-[1060px]:w-full'>
							<ResumeItem
								title='Возраст'
								source={age}
							/>
							<ResumeItem
								title='Желаемая дожность'
								source={data?.goal}
							/>
							<ResumeItem
								title='Ожидаемый доход'
								source={data?.money}
							/>
						</ResumeItemWrapper>

						<ResumeItemWrapper className='flex gap-[2rem] w-full max-xl:w-auto max-[1060px]:min-w-full'>
							<ResumeListItem title={'Стек'}>
								{data?.stack?.map((item, index) => (
									<ResumeItemText key={index}>{item.stackItem}</ResumeItemText>
								))}
							</ResumeListItem>
						</ResumeItemWrapper>
					</div>

					<div className='flex gap-[2rem] mb-[2rem] w-full max-xl:w-auto max-[1060px]:flex-wrap'>
						<ResumeItemWrapper className='shrink-0 max-xl:shrink-1 max-[1060px]:min-w-full'>
							<ResumeListItem title={'В планах'}>
								{data?.plan?.map((item, index) => (
									<ResumeItemText key={index}>{item.planningItem}</ResumeItemText>
								))}
							</ResumeListItem>
						</ResumeItemWrapper>

						<ResumeItemWrapper className='max-w-full w-full'>
							<ResumeListItem title={'Дополнительные навыки'}>
								{data?.additionalSkills?.map((item, index) => (
									<ResumeItemText key={index}>{item.additionalSkillItem}</ResumeItemText>
								))}
							</ResumeListItem>
						</ResumeItemWrapper>
					</div>

					<div className='flex flex-col gap-[2rem] max-xl:flex-row max-md:flex-col'>
						<ResumeItemWrapper className='w-full max-xl:w-fit max-md:w-full'>
							<ResumeTimeline title={'Опыт работы'}>
								{data?.experience?.map((item, index) => (
									<ResumeTimelineItem
										key={index}
										company={item.company}
										jobTitle={item.jobTitle}
										years={item.years}
										index={index}
									/>
								))}
							</ResumeTimeline>
						</ResumeItemWrapper>

						<ResumeItemWrapper className='text-lg w-full max-xl:w-2/3 max-md:w-full'>
							{data?.about ? <PortableText value={data?.about} /> : null}
						</ResumeItemWrapper>
					</div>
				</div>
			)}
		</section>
	)
}
