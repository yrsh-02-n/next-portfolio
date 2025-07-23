import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './sanity/env'
import { heroScreenType } from './sanity/schemaTypes/heroScreen'
import { postType } from './sanity/schemaTypes/postType'
import { SocialLinkType } from './sanity/schemaTypes/socialLink'

export default defineConfig({
	projectId: projectId,
	dataset: dataset,
	plugins: [structureTool()],
	schema: { types: [SocialLinkType, heroScreenType, postType] }
})
