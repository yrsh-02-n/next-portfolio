import { blockContent } from './blockContent'
import { headingBlockType } from './blocks/headingBlock'
import { imagesBlockType } from './blocks/imagesBlock'
import { oneImageBlockType } from './blocks/oneImageBlock'
import { splitImageType } from './blocks/splitImageType'
import { textOnlyBlock } from './blocks/textOnlyBlock'
import { heroScreenType } from './heroScreen'
import { pageBuilderType } from './pageBuilderType'
import { portfolioCaseType } from './portfolioCaseType'
import { resumeType } from './resumeType'
import { SocialLinkType } from './socialLink'

export const schemaTypes = [
	SocialLinkType,
	heroScreenType,
	portfolioCaseType,
	pageBuilderType,
	splitImageType,
	headingBlockType,
	blockContent,
	oneImageBlockType,
	imagesBlockType,
	textOnlyBlock,
	resumeType
]
