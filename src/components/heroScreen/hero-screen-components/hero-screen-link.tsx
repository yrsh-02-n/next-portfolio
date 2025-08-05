import Link from 'next/link'

import { IHeroScreenLink } from '../hero-screen.types'

export function HeroScreenLink({
	title,
	url,
	children,
	className,
	onMouseEnter,
	onMouseLeave
}: IHeroScreenLink) {
	return (
		<Link
			href={url}
			title={title}
			className={className}
			onMouseLeave={onMouseLeave}
			onMouseEnter={onMouseEnter}
		>
			{children}
		</Link>
	)
}
