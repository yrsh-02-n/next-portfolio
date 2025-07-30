'use client'

import { m } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { CategoryHeading } from '@/src/components/categoryHeading.tsx/CategoryHeading'
import { Breadcrumbs } from '@/src/components/ui/breadcrumbs/Breadcrumbs'
import { CaseCard } from '@/src/components/ui/caseCard/CaseCard'
import { SkeletonLoader } from '@/src/components/ui/skeletonLoader/skeletonLoader'
import { useSlidesCount } from '@/src/hooks/useSlidesCount'
import { IPortfolioCase } from '@/src/types/portfolioCase'

export default function Page() {
	const [cases, setCases] = useState<IPortfolioCase[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const params = useParams<{ category?: string }>()
	const loaderItemsCount = useSlidesCount()

	const category = params.category ? params.category.toLowerCase() : null

	useEffect(() => {
		if (!category || !['dev', 'design'].includes(category)) {
			setError('Invalid category')
			setIsLoading(false)
			return
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
			} catch (err) {
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
			label: category === 'design' ? 'Портфолио: веб-дизайн' : 'Портфолио: frontend-разработка',
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
				title={category === 'design' ? 'Портфолио: веб-дизайн' : 'Портфолио: frontend-разработка'}
				image={category === 'design' ? '/covers/design-cover.jpg' : '/covers/dev-cover.jpg'}
			/>

			{!isLoading ? (
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<div
						className={`grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[2.5rem]`}
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
				<div className='grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[2.5rem]'>
					<SkeletonLoader
						count={loaderItemsCount}
						className='h-[24rem]'
					/>
				</div>
			)}
		</div>
	)
}
