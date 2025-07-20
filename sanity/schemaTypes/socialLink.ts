import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const SocialLinkType = defineType({
	name: 'socialLink',
	title: 'Соцсеть',
	type: 'document',
	icon: LinkIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Text displaying',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'url',
			type: 'url',
			validation: Rule => Rule.required().uri({ allowRelative: false }) // only absolute url
		}),
		defineField({
			name: 'icon',
			type: 'image',
			options: { accept: 'image/svg+xml' } // only svg
		}),
		defineField({
			name: 'order',
			type: 'number',
			initialValue: 0,
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: { title: 'title', media: 'icon' }
	}
})
