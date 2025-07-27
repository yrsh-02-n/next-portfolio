import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? 'PROJECT_ID'
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'DATASET'

export default defineCliConfig({ api: { projectId, dataset } })
