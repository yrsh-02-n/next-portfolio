import { defineQuery } from 'next-sanity'

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

// Для получения всех слагов (для generateStaticParams)
export const PORTFOLIO_CASE_SLUGS =
	defineQuery(`*[_type == "portfolioCase" && defined(slug.current)]{
  slug
}`)

// export const PORTFOLIO_CASE_PAGE_BY_CATEGORY =
// 	defineQuery(`*[_type == "portfolioCase" && slug.current == $slug && caseCategory == $category][0]{
//   _id,
//   caseTitle,
//   caseCategory,
//   slug,
//   content[]{
//     _key,
//     _type,
//     // All fields of blocks
//     title,
//     description,
//     btnText,
//     btnUrl,
//     orientation,
//     image{
//       asset->{
//         _id,
//         url,
//         metadata,
//       }
//     }
//   }
// }`)

export const PORTFOLIO_CASE_PAGE_BY_CATEGORY =
	defineQuery(`*[_type == "portfolioCase" && slug.current == $slug && caseCategory == $category][0]{
  _id,
  caseTitle,
  caseCategory,
  slug,
  content[]{
    _key,
    _type,
    // Conditional fields based on block type
    _type == "headingBlock" => {
      title,
      description,
      btnText,
      btnUrl,
      image{
        asset->{
          _id,
          url,
          metadata,
        }
      }
    },
    _type == "splitImage" => {
      orientation,
      text,
      image{
        asset->{
          _id,
          url,
          metadata,
        }
      }
    }
  }
}`)

// All slugs by category
export const PORTFOLIO_CASE_SLUGS_BY_CATEGORY =
	defineQuery(`*[_type == "portfolioCase" && caseCategory == $category && defined(slug.current)]{
  slug
}`)
