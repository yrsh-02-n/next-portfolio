import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './sanity/env'
import { blockContent } from './sanity/schemaTypes/blockContent'
import { headingBlockType } from './sanity/schemaTypes/blocks/headingBlock'

import { heroScreenType } from './sanity/schemaTypes/heroScreen'
import { pageBuilderType } from './sanity/schemaTypes/pageBuilderType'
import { SocialLinkType } from './sanity/schemaTypes/socialLink'
import { portfolioCaseType } from './sanity/schemaTypes/portfolioCaseType'
import { splitImageType } from './sanity/schemaTypes/blocks/splitImageType'

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
			blockContent
		]
	}
})
