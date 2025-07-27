


import { PAGE_QUERYResult } from '@/sanity.types'
import { Hero } from './blocks/Hero'
import { Features } from './blocks/Features'
import { SplitImage } from './blocks/SplitImage'
import { FAQs } from './blocks/FAqs'

type PageBuilderProps = {
	content: NonNullable<PAGE_QUERYResult>['content']
}

export function PageBuilder({ content }: PageBuilderProps) {
	if (!Array.isArray(content)) {
		return null
	}

	return (
		<main>
			{content.map(block => {
				switch (block._type) {
					case 'hero':
						return (
							<Hero
								key={block._key}
								{...block}
							/>
						)
					case 'features':
						return (
							<Features
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
					case 'faqs':
						return (
							<FAQs
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
