import type { LucideIcon } from 'lucide-react'

export interface IMenuItem {
	label?: string
	link: string
	icon?: LucideIcon
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
	title: string
}
