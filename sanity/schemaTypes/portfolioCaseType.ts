import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const portfolioCaseType = defineType({
	name: 'portfolioCase',
	title: 'Case',
	type: 'document',
	icon: DocumentIcon,
	fields: [
		{
			name: 'order',
			title: 'Order',
			type: 'number'
		},
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
					{ title: 'Dev', value: 'dev' }
				]
			},
			validation: rule => rule.required()
		}),
		defineField({
			name: 'caseCardImage',
			title: 'Case card image',
			type: 'image',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'content',
			type: 'pageBuilder'
		})
	],
	preview: {
		select: {
			title: 'caseTitle',
			subtitle: 'slug.current'
		}
	}
})
