import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './sanity/env'
import { heroScreenType } from './sanity/schemaTypes/heroScreen'
import { SocialLinkType } from './sanity/schemaTypes/socialLink'
import { portfolioCaseType } from './sanity/schemaTypes/portfolioCase'

export default defineConfig({
	projectId: projectId,
	dataset: dataset,
	plugins: [structureTool()],
	schema: { types: [SocialLinkType, heroScreenType, portfolioCaseType] }
})
