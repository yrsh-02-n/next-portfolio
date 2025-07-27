import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './sanity/env'
import { heroScreenType } from './sanity/schemaTypes/heroScreen'
import { portfolioCaseType } from './sanity/schemaTypes/portfolioCase'
import { SocialLinkType } from './sanity/schemaTypes/socialLink'
import { pageType } from './sanity/schemaTypes/pageType'
import { pageBuilderType } from './sanity/schemaTypes/pageBuilderType'
import { faqType } from './sanity/schemaTypes/faqType'
import { faqsType } from './sanity/schemaTypes/blocks/faqsType'
import { featuresType } from './sanity/schemaTypes/blocks/featuresType'
import { heroType } from './sanity/schemaTypes/blocks/heroType'
import { splitImageType } from './sanity/schemaTypes/casePage'
import { blockContent } from './sanity/schemaTypes/blockContent'

export default defineConfig({
	projectId: projectId,
	dataset: dataset,
	plugins: [structureTool()],
	schema: {
		types: [
			SocialLinkType,
			heroScreenType,
			portfolioCaseType,
			pageType,
			pageBuilderType,
			faqType,
			faqsType,
			featuresType,
			heroType,
			splitImageType,
      blockContent
		]
	}
})
