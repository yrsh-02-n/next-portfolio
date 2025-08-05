import { Code, PanelsTopLeft } from 'lucide-react'

import { PAGE } from '@/config/public-page.config'

import { IMenuItem } from './nav/menu.types'

export const HEADER_DATA: IMenuItem[] = [
	{
		label: 'я',
		link: PAGE.ABOUT,
		title: 'О моем опыте'
	},
	{
		label: 'frontend-разработчик',
		link: PAGE.PORTFOLIO_DEV,
		title: 'Портфолио: frontend-разработка',
		icon: Code
	},
	{
		label: 'web-дизайнер',
		link: PAGE.PORTFOLIO_DESIGN,
		title: 'Портфолио: web-дизайн',
		icon: PanelsTopLeft
	}
]
