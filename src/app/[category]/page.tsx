'use client'

import { m } from 'framer-motion'
import { Metadata } from 'next'
import { notFound, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { CategoryHeading } from '@/components/category-heading/category-heading'
import { Breadcrumbs } from '@/components/ui/breadcrumbs/Breadcrumbs'
import { CaseCard } from '@/components/ui/caseCard/case-card'
import { SkeletonLoader } from '@/components/ui/skeleton-loader/skeleton-loader'

import { useSlidesCount } from '@/hooks/useSlidesCount'

import { generateCategoryPageMetadata } from './categoryPageMetadata'
import { IPortfolioCase } from '@/types/portfolioCase'

export default function Page() {
	const [cases, setCases] = useState<IPortfolioCase[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const params = useParams<{ category?: string }>()
	const loaderItemsCount = useSlidesCount()
	const designTitle: string = 'Портфолио: web-дизайн'
	const devTitle: string = 'Портфолио: frontend-разработка'

	type Props = {
		params: Promise<{ category: string }>
	}

	async function generateMetadata(props: Props): Promise<Metadata> {
		return generateCategoryPageMetadata(props)
	}

	const category = params.category ? params.category.toLowerCase() : null

	// return to top of page on loading
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		if (!category || !['dev', 'design'].includes(category)) {
			setIsLoading(false)
			notFound()
		}

		// data fetch
		const fetchData = async () => {
			setIsLoading(true)
			setError(null)
			setCases([])

			try {
				const response = await fetch(`/api/portfolio/byCategory?category=${category}`)

				if (!response.ok) {
				}

				const data = await response.json()
				setCases(data)
			} catch (error) {
				setError('Портфолио не загрузилось. Пожалуйста, обновите страницу')
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [category])

	// breadcrumbs
	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{
			label: category === 'design' ? designTitle : devTitle,
			isCurrent: true
		}
	]

	return (
		<div>
			<Breadcrumbs
				items={breadcrumbs}
				className='mb-[2rem]'
			/>

			<CategoryHeading
				title={category === 'design' ? designTitle : devTitle}
				image={category === 'design' ? '/covers/design-cover.jpg' : '/covers/dev-cover.jpg'}
			/>

			{!isLoading ? (
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className='mb-[5rem]'
				>
					<div
						className={`grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[2.5rem]`}
					>
						{cases.map(item => (
							<CaseCard
								key={item._id}
								slug={item.slug}
								caseDescription={item.caseDescription}
								caseTitle={item.caseTitle}
								caseCardImage={item.caseCardImage}
								caseCategory={item.caseCategory}
							/>
						))}
					</div>
				</m.div>
			) : (
				<div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[2.5rem]'>
					<SkeletonLoader
						count={loaderItemsCount}
						className='h-[24rem]'
					/>
				</div>
			)}
			{error && (
				<div className='w-full flex flex-col items-center justify-center text-center'>
					<div className='text-[2rem] mb-[1rem]'>(╯°□°)╯︵ ┻━┻</div>
					<p className='text-2xl'>{error}</p>
				</div>
			)}
		</div>
	)
}
