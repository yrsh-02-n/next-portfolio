import { createClient } from '@sanity/client'

import { dataset, projectId } from './env'

export const client = createClient({
	projectId,
	dataset,
	apiVersion: '2024-01-01',
	useCdn: true
})
