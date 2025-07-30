class PublicPage {
	HOME = '/'
	ABOUT = '/#about'
	PORTFOLIO_DEV = '/dev'
	PORTFOLIO_DESIGN = '/design'

	DEV_PROJECT(path: string) {
		return `${this.PORTFOLIO_DEV}/${path}`
	}

	DESIGN_PROJECT(path: string) {
		return `${this.PORTFOLIO_DESIGN}/${path}`
	}
}

export const PAGE = new PublicPage()
