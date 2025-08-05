import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { client } from 'sanity/client'
import { sanityFetch } from 'sanity/lib/live'
import { PORTFOLIO_CASE_PAGE_BY_CATEGORY } from 'sanity/lib/queries'

import { PageBuilder } from '@/components/pageBuilder'
import { Breadcrumbs } from '@/components/ui/breadcrumbs/Breadcrumbs'
import { SkeletonLoader } from '@/components/ui/skeleton-loader/skeleton-loader'

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
		notFound()
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
		notFound()
	}

	// breadcrumbs
	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{
			label:
				resolvedParams.category === 'design'
					? 'Портфолио: web-дизайн'
					: 'Портфолио: frontend-разработка',
			href: `/${resolvedParams.category}`
		},
		{ label: page.caseTitle || 'Неивзестный путь', isCurrent: true }
	]

	return (
		<Suspense
			fallback={
				<SkeletonLoader
					count={1}
					className='flex gap-[5rem] w-full h-[20rem]'
				/>
			}
		>
			<Breadcrumbs
				items={breadcrumbs}
				className='mb-[2rem]'
			/>
			{page?.content ? (
				<PageBuilder content={page.content} />
			) : (
				<div className='w-full flex flex-col items-center justify-center text-center'>
					<div className='text-[2rem] mb-[1rem]'>(╯°□°)╯︵ ┻━┻</div>
					<p className='text-2xl'>Страница проекта не загрузилась. Пожалуйста, обновите страницу</p>
				</div>
			)}
		</Suspense>
	)
}
