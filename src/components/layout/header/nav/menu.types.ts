import type { LucideIcon } from 'lucide-react'

export interface IMenuItem {
	label?: string
	link: string
	icon?: LucideIcon
	isActive: boolean
	title: string
}
