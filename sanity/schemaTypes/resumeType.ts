import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const resumeType = defineType({
	name: 'resumeType',
	title: 'Resume info',
	type: 'document',
	icon: DocumentIcon,
	fields: [
		defineField({
			name: 'goal',
			title: 'Goal',
			type: 'string'
		}),
		defineField({
			name: 'money',
			title: 'Money',
			type: 'string'
		}),
		defineField({
			name: 'stack',
			title: 'Stack',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'stackItem',
							title: 'Stack item',
							type: 'string'
						})
					]
				}
			]
		}),
		defineField({
			name: 'plan',
			title: 'Planning',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'planningItem',
							title: 'Planning item',
							type: 'string'
						})
					]
				}
			]
		}),
		defineField({
			name: 'additionalSkills',
			title: 'Additional Skills',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'additionalSkillItem',
							title: 'Additional skill item',
							type: 'string'
						})
					]
				}
			]
		}),
		defineField({
			name: 'experience',
			title: 'Experience',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'company',
							title: 'Company',
							type: 'string'
						}),
						defineField({
							name: 'jobTitle',
							title: 'Job title',
							type: 'string'
						}),
						defineField({
							name: 'years',
							title: 'years',
							type: 'string'
						})
					]
				}
			]
		}),
		defineField({
			name: 'about',
			title: 'About',
			type: 'blockContent'
		})
	]
})
