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
			className="flex items-center gap-[2rem] data-[orientation='imageRight']:flex-row-reverse text-balance"
			data-orientation={stegaClean(orientation) || 'imageLeft'}
		>
			<div className='relative w-[30%] aspect-[15/9]'>
				{image ? (
					<Image
						className='absolute aspect-[16/9] object-cover'
						src={urlFor(image).width(500).height(300).url()}
						fill
						alt=''
					/>
				) : null}
			</div>
			<div className='w-[70%] text-2xl text-primary flex flex-col gap-[1rem]'>
				{text ? <PortableText value={text} /> : null}
			</div>
		</section>
	)
}
