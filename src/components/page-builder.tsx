import { PORTFOLIO_CASE_PAGE_BY_CATEGORYResult } from 'sanity.types'

import { HeadingBlock } from './blocks/heading-block'
import { MultipleImagesBlock } from './blocks/images-block'
import { OneImageBlock } from './blocks/one-image-block'
import { SplitImage } from './blocks/split-image'
import { TextOnlyBlock } from './blocks/text-only-block'

type PageBuilderProps = {
	content: NonNullable<PORTFOLIO_CASE_PAGE_BY_CATEGORYResult>['content']
}

export function PageBuilder({ content }: PageBuilderProps) {
	if (!Array.isArray(content)) {
		return null
	}

	return (
		<main>
			{content.map(block => {
				switch (block._type) {
					case 'headingBlock':
						return (
							<HeadingBlock
								key={block._key}
								{...block}
							/>
						)
					case 'splitImage':
						return (
							<SplitImage
								key={block._key}
								{...block}
							/>
						)
					case 'caseOneImage':
						return (
							<OneImageBlock
								key={block._key}
								{...block}
							/>
						)
					case 'multipleCaseImages':
						return (
							<MultipleImagesBlock
								key={block._key}
								block={block}
							/>
						)
					case 'textOnlyBlock':
						return (
							<TextOnlyBlock
								key={block._key}
								{...block}
							/>
						)
					default:
						// This is a fallback for when we don't have a block type
						return <div>Block not found</div>
				}
			})}
		</main>
	)
}
