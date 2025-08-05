import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
	S.list()
		.title('Content')
		// .items(S.documentTypeListItems())
		.items([
			S.documentTypeListItem('portfolioCaseType').title('portfolioCaseType'),
			S.divider(),
			...S.documentTypeListItems().filter(
				item => item.getId() && !['portfolioCaseType'].includes(item.getId()!)
			)
		])
