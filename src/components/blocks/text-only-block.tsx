import { PortableText } from 'next-sanity'
import { PORTFOLIO_CASE_PAGE_BY_CATEGORYResult } from 'sanity.types'

type textOnlyBlock = Extract<
	NonNullable<NonNullable<PORTFOLIO_CASE_PAGE_BY_CATEGORYResult>['content']>[number],
	{ _type: 'textOnlyBlock' }
>

export function TextOnlyBlock({ text }: textOnlyBlock) {
	return (
		<div className='text-xl max-xl:text-xl max-md:text-lg text-primary flex flex-col gap-[1rem] w-full sanity-block mb-[4rem]'>
			{text ? <PortableText value={text} /> : null}
		</div>
	)
}
