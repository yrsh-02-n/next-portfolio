export interface ICardImage {
	asset: { url: string } | null
}

export interface IPortfolioCase {
	_id?: string
	slug: { current: string } | null
	caseCardImage?: ICardImage
	caseCategory?: 'design' | 'dev' | null
	caseDescription: string | null
	caseTitle: string | null
	className?: string
}
