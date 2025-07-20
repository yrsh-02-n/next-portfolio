import { Code, PanelsTopLeft } from 'lucide-react'

import { IMenuItem } from './nav/menu.types'
import { PAGE } from '@/src/config/public-page.config'

export const HEADER_DATA: IMenuItem[] = [
	{
		label: 'я',
		link: PAGE.ABOUT,
		isActive: false,
		title: 'О моем опыте'
	},
	{
		label: 'frontend-разработчик',
		link: PAGE.PORTFOLIO_DEV,
		isActive: false,
		title: 'Портфолио: frontend-разработка',
		icon: Code
	},
	{
		label: 'web-дизайнер',
		link: PAGE.PORTFOLIO_DESIGN,
		isActive: false,
		title: 'Портфолио: web-дизайн',
		icon: PanelsTopLeft
	}
]
