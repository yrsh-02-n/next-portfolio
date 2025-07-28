import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/live'
import { PORTFOLIO_CASE_PAGE_BY_CATEGORY } from '@/sanity/lib/queries'
import { PageBuilder } from '@/src/components/pageBuilder'

// SSG
export async function generateStaticParams() {
	// get cases
	const [designCases, devCases] = await Promise.all([
		client.fetch(
			`*[_type == "portfolioCase" && caseCategory == "design" && defined(slug.current)]{
        slug
      }`
		),
		client.fetch(
			`*[_type == "portfolioCase" && caseCategory == "development" && defined(slug.current)]{
        slug
      }`
		)
	])

	// design paths
	const designParams = designCases.map((item: any) => ({
		category: 'design',
		slug: item.slug.current
	}))

	// dev paths
	const devParams = devCases.map((item: any) => ({
		category: 'dev',
		slug: item.slug.current
	}))

	return [...designParams, ...devParams]
}

export const revalidate = 604800 // 1 week

export default async function Page({
	params
}: {
	params: Promise<{ slug: string; category: string }>
}) {
	const resolvedParams = await params

	// category validation
	if (!['design', 'dev'].includes(resolvedParams.category)) {
		return (
			<div className='container mx-auto px-4 py-16'>
				<h1 className='text-3xl font-bold'>Invalid category</h1>
			</div>
		)
	}

	const { data: page } = await sanityFetch({
		query: PORTFOLIO_CASE_PAGE_BY_CATEGORY,
		params: {
			slug: resolvedParams.slug,
			category: resolvedParams.category
		}
	})

	// check case exists
	if (!page || page.caseCategory !== resolvedParams.category) {
		return null // 404
	}

	return page?.content ? <PageBuilder content={page.content} /> : null
}
