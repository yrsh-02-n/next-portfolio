import { PortableText, stegaClean } from 'next-sanity'
import Image from 'next/image'
import { PORTFOLIO_CASE_PAGE_BY_CATEGORYResult } from 'sanity.types'

import { urlFor } from '@/sanity/lib/image'

type SplitImageProps = Extract<
	NonNullable<NonNullable<PORTFOLIO_CASE_PAGE_BY_CATEGORYResult>['content']>[number],
	{ _type: 'splitImage' }
>

export function SplitImage({ text, image, orientation }: SplitImageProps) {
	return (
		<div
			className="flex items-top gap-[2rem] data-[orientation='imageRight']:flex-row-reverse text-balance mb-[4rem] max-md:data-[orientation='imageRight']:flex-col max-md:gap-[3rem]"
			data-orientation={stegaClean(orientation) || 'imageLeft'}
		>
			<div className='relative aspect-[16/9] h-full w-[50%] max-md:order-2 max-md:w-full'>
				{image?.asset?.url ? (
					<Image
						src={urlFor(image).url()}
						alt=''
						fill
						className='object-contain'
					/>
				) : null}
			</div>
			<div className='w-[50%] max-md:w-full text-2xl max-xl:text-xl max-md:text-lg text-primary flex flex-col gap-[1rem] sanity-block max-md:order-1'>
				{text ? <PortableText value={text} /> : null}
			</div>
		</div>
	)
}
