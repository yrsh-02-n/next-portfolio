import { Code, PanelsTopLeft } from 'lucide-react'

import { IMenuItem } from './nav/menu.types'
import { PAGE } from '@/src/config/public-page.config'

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
