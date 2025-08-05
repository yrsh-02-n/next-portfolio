import { PortableText, stegaClean } from 'next-sanity'
import Image from 'next/image'
import { PORTFOLIO_CASE_PAGE_BY_CATEGORYResult } from 'sanity.types'
import { urlFor } from '@/sanity/lib/image'

type OneImageBlockProps = Extract<
	NonNullable<NonNullable<PORTFOLIO_CASE_PAGE_BY_CATEGORYResult>['content']>[number],
	{ _type: 'caseOneImage' }
>

export function OneImageBlock({ image, alt }: OneImageBlockProps) {
	return (
		<div className='relative w-full'>
			{image?.asset?.url ? (
				<Image
					src={urlFor(image).url()}
					alt={alt as string}
					width={image.asset.metadata?.dimensions?.width || 1200}
					height={image.asset.metadata?.dimensions?.height || 800}
					className='w-full h-auto object-contain shadow mb-[3rem]'
				/>
			) : null}
		</div>
	)
}
