import { defineConfig } from 'sanity'
import { postType } from './sanity/schemaTypes/postType'
import { structureTool } from 'sanity/structure'
import { dataset, projectId } from './sanity/env'
import { SocialLinkType } from './sanity/schemaTypes/socialLink'

export default defineConfig({
  projectId: projectId,
  dataset: dataset,
  plugins: [structureTool()],
  schema: { types: [SocialLinkType ,postType] },
})
