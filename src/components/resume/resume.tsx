'use client'

import { useEffect, useState } from 'react'

import { Heading } from '../headings/Heading'

import { ResumeItem } from './resume-assets/resumeItem'
import { ResumeItemsText } from './resume-assets/resumeItemsText'
import { ResumeListItem } from './resume-assets/resumeListItem'
import { ResumeType } from '@/sanity.types'
import { getAge } from '@/src/utils/getAge'
import { PortableText } from 'next-sanity'

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

	console.log(data?.stack)

	return (
		<section className='flex flex-col bg-secondary p-[2rem] text-light border-b border-accent mb-[5rem]'>
			<Heading
				isH1={false}
				className='mb-[3rem]'
			>
				Краткое резюме
			</Heading>
			{/* 1st row */}
			<div className='flex mb-[2rem] gap-[2rem]'>
				<div className='flex gap-[2rem] bg-additional/80 p-[2rem] border-b border-accent'>
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
				<div className='flex gap-[2rem] bg-additional/80 p-[2rem] border-b border-accent'>
					<ResumeListItem title={'Стек'}>
						{data?.stack?.map((item, index) => (
							<ResumeItemsText key={index}>{item.stackItem}</ResumeItemsText>
						))}
					</ResumeListItem>
				</div>
			</div>

			{/* 2nd row */}
			<div className='flex gap-[2rem] mb-[2rem]'>
				<div className='flex gap-[2rem] bg-additional/80 p-[2rem] border-b border-accent'>
					<ResumeListItem title={'В планах'}>
						{data?.plan?.map((item, index) => (
							<ResumeItemsText key={index}>{item.planningItem}</ResumeItemsText>
						))}
					</ResumeListItem>
				</div>
				<div className='flex gap-[2rem] bg-additional/80 p-[2rem] border-b border-accent'>
					<ResumeListItem title={'Дополнительные навыки'}>
						{data?.additionalSkills?.map((item, index) => (
							<ResumeItemsText key={index}>{item.additionalSkillItem}</ResumeItemsText>
						))}
					</ResumeListItem>
				</div>
			</div>

			{/* 3rd row */}
			<div className='flex gap-[10rem] mb-[2rem] border-b border-accent pb-[2.2rem]'>
				<div className='w-full bg-additional/80 p-[2rem] border-b border-accent'>
					<ResumeListItem title={'Опыт работы'}>
						{data?.additionalSkills?.map((item, index) => (
							<ResumeItemsText key={index}>{item.additionalSkillItem}</ResumeItemsText>
						))}
					</ResumeListItem>
				</div>
			</div>

      {/* 4rd row */}
			<div className='flex gap-[10rem] mb-[2rem]'>
				<div className='w-full text-lg bg-additional/80 p-[2rem] border-b border-accent'>
					{data?.about ? <PortableText value={data?.about} /> : null}
				</div>
			</div>
		</section>
	)
}
