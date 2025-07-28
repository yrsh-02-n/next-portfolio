import { HeadingBlock } from './blocks/HeadingBlock'
import { OneImageBlock } from './blocks/OneImageBlock'
import { SplitImage } from './blocks/SplitImage'
import { PORTFOLIO_CASE_PAGE_BY_CATEGORYResult } from '@/sanity.types'

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

					default:
						// This is a fallback for when we don't have a block type
						return <div key={block._key}>Block not found: {block._type}</div>
				}
			})}
		</main>
	)
}
