export interface ICardImage {
  asset: {url: string}
}

export interface IPortfolioCase {
	_id?: string
	slug: { current: string }
	caseCardImage?: ICardImage
	caseCategory?: string
	caseDescription: string
	caseTitle: string
	className?: string
}
