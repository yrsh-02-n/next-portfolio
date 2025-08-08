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

// portfolio cases for case pages
export const PORTFOLIO_CASE_PAGE_BY_CATEGORY =
	defineQuery(`*[_type == "portfolioCase" && slug.current == $slug && caseCategory == $category][0]{
  _id,
  caseTitle,
  caseCategory,
  slug,
  caseDescription,
  caseCardImage,
  order,
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
          metadata
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
          metadata
        }
      }
    },
    _type == "caseOneImage" => {
      image{
        asset->{
          _id,
          url,
          metadata
        }
      },
      alt
    },
    _type == "multipleCaseImages" => {
      images[]{
        asset->{
          _id,
          url,
          metadata
        }
      }
    },
    _type == "textOnlyBlock" => {
        text
      }
    
  }
}`)

// latest portfolio cases
export const LATEST_PORTFOLIO_ITEMS =
	defineQuery(`*[_type == "portfolioCase"] | order(_createdAt desc) [0...10] {
  _id,
  caseTitle,
  caseDescription,
  slug,
  caseCategory,
  caseCardImage{
    asset->{
      _id,
      url,
      metadata
    }
  }
}`)

// cases by category for listing
export const PORTFOLIO_CASES_BY_CATEGORY =
	defineQuery(`*[_type == "portfolioCase" && caseCategory == $category] | order(order desc) {
  _id,
  caseTitle,
  caseDescription,
  slug,
  caseCategory,
  order,
  caseCardImage{
    asset->{
      _id,
      url,
    }
  }
}`)

// resume block
export async function getResumeData() {
	return client.fetch(
		`*[_type == "resumeType"][0]{
      _id,
      goal,
      money,
      stack[],
      plan[],
      additionalSkills[],
      experience[],
      about
    }`
	)
}
