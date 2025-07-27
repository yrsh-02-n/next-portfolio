import { blockContent } from './blockContent'
import { faqsType } from './blocks/faqsType'
import { featuresType } from './blocks/featuresType'
import { heroType } from './blocks/heroType'
import { splitImageType } from './blocks/splitImageType'
import { faqType } from './faqType'
import { heroScreenType } from './heroScreen'
import { pageBuilderType } from './pageBuilderType'
import { pageType } from './pageType'
import { postType } from './postType'
import { SocialLinkType } from './socialLink'

export const schemaTypes = [
	SocialLinkType,
	heroScreenType,
	postType,
	pageType,
	pageBuilderType,
	faqType,
	faqsType,
	featuresType,
	heroType,
	splitImageType,
	blockContent
]
