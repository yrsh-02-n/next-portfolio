import { blockContent } from './blockContent'
import { headingBlockType } from './blocks/headingBlock'
import { oneImageBlockType } from './blocks/oneImageBlock'
import { splitImageType } from './blocks/splitImageType'
import { heroScreenType } from './heroScreen'
import { pageBuilderType } from './pageBuilderType'
import { portfolioCaseType } from './portfolioCaseType'
import { SocialLinkType } from './socialLink'

export const schemaTypes = [
	SocialLinkType,
	heroScreenType,
	portfolioCaseType,
	pageBuilderType,
	splitImageType,
	headingBlockType,
	blockContent,
	oneImageBlockType
]
