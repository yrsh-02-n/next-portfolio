import { defineArrayMember, defineType } from 'sanity'

export const pageBuilderType = defineType({
	name: 'pageBuilder',
	type: 'array',
	of: [defineArrayMember({ type: 'headingBlock' }), defineArrayMember({ type: 'splitImage' })]
})
