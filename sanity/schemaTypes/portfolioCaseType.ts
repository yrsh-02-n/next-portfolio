import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const portfolioCaseType = defineType({
	name: 'portfolioCase',
	title: 'Case',
	type: 'document',
	icon: DocumentIcon,
	fields: [
		defineField({
			name: 'caseTitle',
			title: 'Case title',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'caseDescription',
			title: 'Case description',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			}
		}),
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
		defineField({
			name: 'content',
			type: 'pageBuilder'
		})
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'slug.current'
		}
	}
})
