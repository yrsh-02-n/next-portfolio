import { PortableText, stegaClean } from 'next-sanity'
import Image from 'next/image'

import { PORTFOLIO_CASE_PAGE_BY_CATEGORYResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'

type SplitImageProps = Extract<
	NonNullable<NonNullable<PORTFOLIO_CASE_PAGE_BY_CATEGORYResult>['content']>[number],
	{ _type: 'splitImage' }
>

export function SplitImage({ text, image, orientation }: SplitImageProps) {
	return (
		<section
			className="flex gap-8 data-[orientation='imageRight']:flex-row-reverse"
			data-orientation={stegaClean(orientation) || 'imageLeft'}
		>
			{image ? (
				<Image
					className='w-1/3'
					src={urlFor(image).width(400).height(300).url()}
					width={400}
					height={300}
					alt=''
				/>
			) : null}
			<div className='w-2/3 flex items-center'>{text ? <PortableText value={text} /> : null}</div>
		</section>
	)
}
