import { PresentationPluginOptions, defineLocations } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
	locations: {
		// ...other locations
		page: defineLocations({
			select: {
				title: 'title',
				slug: 'slug.current'
			},
			resolve: doc => ({
				locations: [
					{
						title: doc?.title || 'Untitled',
						href: `/${doc?.slug}`
					}
				]
			})
		})
	}
}
