export interface IHeroScreenLink {
	title: string
	url: string
	children?: React.ReactNode
  className?: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export interface IHeroScreenData {
	text: string[]
	links: IHeroScreenLink[]
}
