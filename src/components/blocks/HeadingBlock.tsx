
import { PortableText } from 'next-sanity'
import Image from 'next/image'

import { Heading } from '../headings/Heading'
import { Button } from '../ui/button/Button'

import { PORTFOLIO_CASE_PAGE_BY_CATEGORYResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'

type HeadingBlocksProps = Extract<
	NonNullable<NonNullable<PORTFOLIO_CASE_PAGE_BY_CATEGORYResult>['content']>[number],
	{ _type: 'headingBlock' }
>

export function HeadingBlock({ title, description, btnText, btnUrl, image }: HeadingBlocksProps) {
	return (
		<section className='relative mb-[3rem]'>
			<div>
				<div className='relative w-full h-full shadow p-[2rem] max-s:p-[1rem] min-h-[15rem] flex flex-col justify-center'>
					<div className='absolute inset-0 h-auto saturate-0'>
						{image && (
							<Image
								alt={title as string}
								src={urlFor(image).width(1538).height(244).url()}
								fill
								className='object-cover aspect-[16/9] object-top-right'
							/>
						)}
					</div>

					<div className='absolute inset-0 bg-secondary/90 z-1'></div>
					<div className='relative flex flex-col w-full lg:w-[70%] z-3'>
						{title ? (
							<Heading
								className='mb-[1rem] text-light'
								isH1
							>
								{title}
							</Heading>
						) : null}
						<div className='text-2xl max-s:text-lg text-light'>
							{description ? <PortableText value={description} /> : null}
						</div>
						{btnUrl ? (
							<Button
								href={btnUrl}
								variable='main'
								target='_blank'
								rel='noopener noreferrer'
								className='sm:w-[20rem] w-full mt-[2rem]'
							>
								{btnText}
							</Button>
						) : null}
					</div>
				</div>
			</div>
		</section>
	)
}
