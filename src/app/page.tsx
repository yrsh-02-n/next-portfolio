import { Metadata } from 'next'

import { HeroScreen } from '../components/heroScreen/HeroScreen'
import { DynamicLastTenCases } from '../components/lastTenCases/DynamicLastTenCases'
import { DynamicResume } from '../components/resume/dynamic-resume'

export const metadata: Metadata = {
	title: 'Кирилл Л. | Frontend-разработчик',
	description: 'Портфолио frontend-разработчика и web-дизайнера Кирилла Л.',
	keywords: [
		'Next.js',
		'Некст',
		'React',
		'Реакт',
		'TypeScript',
		'Тайпскрипт',
		'Frontend',
		'Фронтенд',
		'Портфолио',
		'Разработчик',
		'Frontend-разработчик',
		'Фронтенд-разработчик',
		'Web-дизайнер',
		'Веб-дизайнер'
	],
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
			{ url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
		]
	},
	authors: [{ name: 'Кирилл Л.' }],
	creator: 'Кирилл Л.',
	publisher: 'Кирилл Л.',
	openGraph: {
		title: 'Кирилл Л. | Frontend-разработчик',
		description: 'Портфолио frontend-разработчика и web-дизайнера Кирилла Л.',
		url: 'https://yrshdev.ru',
		siteName: 'Портфолио frontend-разработичика и web-дизайнера Кирилла Л.',
		images: [
			{
				url: 'https://yrshdev.ru/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Портфолио frontend-разработичика и web-дизайнера Кирилла Л.'
			}
		],
		locale: 'ru_RU',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true
	}
}

export const revalidate = 86400 // 1 day

export default async function IndexPage() {
	return (
		<>
			<HeroScreen />
			<DynamicLastTenCases />
			<div
				id='about'
				className='scroll-m-[90px]'
			>
				<DynamicResume />
			</div>
		</>
	)
}
