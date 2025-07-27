import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/live'
import { PORTFOLIO_CASE_PAGE_BY_CATEGORY } from '@/sanity/lib/queries'
import { PageBuilder } from '@/src/components/pageBuilder'

// SSG
export async function generateStaticParams() {
	const cases = await client.fetch(
		`*[_type == "portfolioCase" && caseCategory == "design" && defined(slug.current)]{
      slug
    }`
	)

	return cases.map((item: any) => ({
		slug: item.slug.current
	}))
}

export const revalidate = 604800 // 1 week

export default async function Page({ params }: { params: { slug: string } }) {
	const { data: page } = await sanityFetch({
		query: PORTFOLIO_CASE_PAGE_BY_CATEGORY,
		params: {
			slug: params.slug,
			category: 'design'
		}
	})

	return page?.content ? <PageBuilder content={page.content} /> : null
}
