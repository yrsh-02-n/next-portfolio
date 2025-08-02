'use client'

import { PortableText } from 'next-sanity'
import { useEffect, useState } from 'react'

import { Heading } from '../headings/Heading'

import { ResumeItemText } from './resume-items/resume-text-items/resumeItemText'
import { ResumeTimeline } from './resume-items/resume-timeline/resumeTimeline'
import { ResumeTimelineItem } from './resume-items/resume-timeline/resumeTimelineItem'
import { ResumeItem } from './resume-items/resumeItem'
import { ResumeListItem } from './resume-items/resumeListItem'
import { ResumeType } from '@/sanity.types'
import { getAge } from '@/src/utils/getAge'

export function Resume() {
	const [data, setData] = useState<ResumeType>()
	const age = getAge(1992)

	useEffect(() => {
		fetch('/api/resume')
			.then(r => r.json())
			.then(data => {
				setData(data)
				// setIsLoading(false)
			})
			.catch(error => {
				// setIsLoading(false)
				// setError('Ошибка при загрузке блока. Пожалуйста, обновите страницу')
			})
	}, [])

	console.log(data?.experience)

	return (
		<section className='flex flex-col text-light mb-[5rem]'>
			{/* <section className='flex flex-col bg-secondary p-[2rem] text-light border-b border-accent mb-[5rem]'> */}
			<Heading
				isH1={false}
				className='mb-[3rem] text-primary'
			>
				Краткое резюме
			</Heading>
			{/* 1st row */}
			<div className='flex mb-[2rem] gap-[2rem]'>
				<div className='flex gap-[2rem] bg-secondary/90 p-[2rem] border-b border-accent'>
					<ResumeItem
						title='Возраст'
						source={age}
					/>
					<ResumeItem
						title='Карьерная цель'
						source={data?.goal}
					/>
					<ResumeItem
						title='Ожидаемый доход'
						source={data?.money}
					/>
				</div>
				<div className='flex gap-[2rem] flex-1 bg-secondary/90 p-[2rem] border-b border-accent'>
					<ResumeListItem title={'Стек'}>
						{data?.stack?.map((item, index) => (
							<ResumeItemText key={index}>{item.stackItem}</ResumeItemText>
						))}
					</ResumeListItem>
				</div>
			</div>

			{/* 2nd row */}
			<div className='flex gap-[2rem] mb-[2rem] w-full'>
				<div className='flex gap-[2rem] bg-secondary/90 p-[2rem] border-b border-accent'>
					<ResumeListItem title={'В планах'}>
						{data?.plan?.map((item, index) => (
							<ResumeItemText key={index}>{item.planningItem}</ResumeItemText>
						))}
					</ResumeListItem>
				</div>
				<div className='flex gap-[2rem] flex-1 bg-secondary/90 p-[2rem] border-b border-accent'>
					<ResumeListItem title={'Дополнительные навыки'}>
						{data?.additionalSkills?.map((item, index) => (
							<ResumeItemText key={index}>{item.additionalSkillItem}</ResumeItemText>
						))}
					</ResumeListItem>
				</div>
			</div>

			{/* 3rd row */}
			<div className='flex mb-[2rem]'>
				<div className='w-full bg-secondary/90 p-[2rem] border-b border-accent'>
					<ResumeTimeline title={'Опыт работы'}>
						{data?.experience?.map((item, index) => (
							<ResumeTimelineItem
								key={index}
								company={item.company}
								jobTitle={item.jobTitle}
								years={item.years}
							/>
						))}
					</ResumeTimeline>
				</div>
			</div>

			{/* 4rd row */}
			<div className='flex gap-[10rem]'>
				<div className='w-full text-lg bg-secondary/90 p-[2rem] border-b border-accent'>
					{data?.about ? <PortableText value={data?.about} /> : null}
				</div>
			</div>
		</section>
	)
}
