import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './sanity/env'
import { blockContent } from './sanity/schemaTypes/blockContent'
import { headingBlockType } from './sanity/schemaTypes/blocks/headingBlock'
import { imagesBlockType } from './sanity/schemaTypes/blocks/imagesBlock'
import { oneImageBlockType } from './sanity/schemaTypes/blocks/oneImageBlock'
import { splitImageType } from './sanity/schemaTypes/blocks/splitImageType'
import { textOnlyBlock } from './sanity/schemaTypes/blocks/textOnlyBlock'
import { heroScreenType } from './sanity/schemaTypes/heroScreen'
import { pageBuilderType } from './sanity/schemaTypes/pageBuilderType'
import { portfolioCaseType } from './sanity/schemaTypes/portfolioCaseType'
import { resumeType } from './sanity/schemaTypes/resumeType'
import { SocialLinkType } from './sanity/schemaTypes/socialLink'

export default defineConfig({
	projectId: projectId,
	dataset: dataset,
	plugins: [structureTool()],
	schema: {
		types: [
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
	}
})
