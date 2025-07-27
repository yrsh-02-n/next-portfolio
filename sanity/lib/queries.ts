import { client } from './client'

// social links with icon
export async function getSocials() {
	return client.fetch(
		`*[_type == "socialLink"] | order(order asc){
      _id,
      url,
      "icon": icon.asset->url,
      title,
      order
    }`
	)
}

// hero screen text and buttons
export async function getHeroScreenData() {
	return client.fetch(
		`*[_type == "heroScreen"][0]{
      _id,
      heroScreenTexts[]  | order(order asc){ _key, line},
      heroScreenLinks[] | order(order asc){ _key, title, url, order, shortTitle }
    }`
	)
}

// Last 10 projects in portfolio
export async function getLatestPortfolioItems() {
	return client.fetch(
		`*[_type == "portfolioCase"] | order(_createdAt desc) [0...10] {
    _id,
    caseTitle,
    slug,
    caseDescription,
    caseCardImage,
    }`
	)
}

// dev portfolio
export async function getDevPortfolioItems() {
	return client.fetch(
		`*[type == "portfolioCase" && caseCategory == "development"] | order(_createdAt desc) {
    _id,
    caseTitle,
    slug,
    caseDescription,
    caseCardImage,  
    }`
	)
}

// design portfolio
export async function getDesignPortfolioItems() {
	return client.fetch(
		`*[type == "portfolioCase" && caseCategory == "design"] | order(_createdAt desc) {
    _id,
    caseTitle,
    slug,
    caseDescription,
    caseCardImage,  
    }`
	)
}
