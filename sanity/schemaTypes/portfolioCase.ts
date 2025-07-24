import { defineField, defineType } from 'sanity'

export const portfolioCaseType = defineType({
	name: 'portfolioCase',
	title: 'Case',
	type: 'document',
	fields: [
		// project name (card and page)
		defineField({
			name: 'caseTitle',
			title: 'Case Title',
			type: 'string',
			validation: rule => rule.required()
		}),

		// project category (sort by)
		defineField({
			name: 'caseCategory',
			title: 'Case category',
			type: 'string',
			options: {
				list: [
					{ title: 'Design', value: 'design' },
					{ title: 'Development', value: 'development' }
				]
			},
			validation: rule => rule.required()
		}),

		// project slug (card and page)
		defineField({
			name: 'slug',
			title: 'Case slug',
			type: 'slug',
			validation: rule => rule.required()
		}),

		// project description (only card)
		defineField({
			name: 'caseDescription',
			title: 'Case description',
			type: 'string',
			validation: rule => rule.required()
		}),

		// project paragraphs (only page)
		defineField({
			name: 'caseText',
			title: 'Case text',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'textBlock',
							title: 'Абзацы',
							type: 'string',
							validation: rule => rule.required()
						})
					]
				}
			]
		}),

		// project images (only page)
		defineField({
			name: 'caseImages',
			title: 'Case images',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'image',
							type: 'image'
						})
					]
				}
			]
		}),

		// project card image (only card)
		defineField({
			name: 'caseCardImage',
			title: 'Case card image',
			type: 'image'
		}),

		// case real url (only page)
		defineField({
			name: 'caseUrl',
			title: 'Case url',
			type: 'url',
			validation: Rule => Rule.uri({ allowRelative: false }) // only absolute url
		}),

		// publish date
		defineField({
			name: 'publishedAt',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			validation: rule => rule.required()
		})
	]
})
