'use client'

import { m } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button/Button'
import { SkeletonLoader } from '../ui/skeletonLoader/skeletonLoader'

import { HeroScreenImage } from './hero-screen-components/HeroScreenImage'
import { HeroScreenLink } from './hero-screen-components/HeroScreenLink'
import { HeroScreenTextItem } from './hero-screen-components/HeroScreenTextItem'
import { IHeroScreenData } from './heroScreen.types'
import { useKeyboardNavigation } from './use-hero-screen/useKeyboardNavigation'

export function HeroScreen() {
	const [data, setData] = useState<IHeroScreenData>()
	const [isShowLinks, setIsShowLinks] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	// keyboard navigation logic
	const { selectedIndex, setSelectedIndex } = useKeyboardNavigation({
		items: data?.links ?? [],
		onSelect: index => {
			const selectedLink = data?.links[index]
			if (selectedLink) {
				window.location.href = selectedLink.url
			}
		}
	})

	useEffect(() => {
		fetch('/api/heroScreenData')
			.then(r => r.json())
			.then(data => {
				setData(data)
				setIsLoading(false)
			})
	}, [])

	// show links after text typed
	useEffect(() => {
		setTimeout(() => {
			setIsShowLinks(true)
		}, 13400)
	}, [setIsShowLinks])

	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='grid grid-cols-[74.5%_auto] max-xl:grid-cols-[70%_auto] max-lg:grid-cols-1 gap-10 max-lg:gap-5 mb-[5rem]'>
				{isLoading ? (
					<SkeletonLoader
						count={1}
						className='h-[50vh] max-lg:h-[26.5vh] max-md:h-[14.5rem] max-s:[h-20rem] max-xs:h-[18rem]'
					/>
				) : (
					<div className='max-md:w-full text-bg h-[50vh] px-6 py-4 bg-secondary/80 shadow-lg max-lg:h-[26.5vh] max-md:h-[14.5rem] max-s:[h-20rem] max-xs:h-[18rem]'>
						{/* text lines from sanity */}
						<div className='mb-6 max-md:text-xl'>
							<HeroScreenTextItem text={data?.text.join('\n > ') ?? ''} />
						</div>

						{/* links with keyboard control from sanity */}
						<div className='flex flex-col text-2xl max-lg:text-lg max-md:max-w-fit max-lg:hidden'>
							{isShowLinks &&
								data?.links?.map((item, i) => {
									return (
										<HeroScreenLink
											key={i}
											url={item.url}
											title={item.title}
											shortTitle={item.shortTitle}
											className={
												i === selectedIndex
													? 'px-0 text-accent font-medium'
													: 'px-[1.29rem] text-light'
											}
											onMouseEnter={() => setSelectedIndex(i)}
											onMouseLeave={() => setSelectedIndex(selectedIndex)}
										>
											{i === selectedIndex ? '> ' : ' '}
											{item.title}
										</HeroScreenLink>
									)
								})}
						</div>
					</div>
				)}

				{/* Image */}
				<div className='shadow-lg max-lg:hidden'>
					<HeroScreenImage />
				</div>

				{/* Mobile buttons */}
				<div className='flex flex-col gap-3 lg:hidden'>
					{data ? (
						data?.links?.map((item, i) => {
							return (
								<Button
									key={i}
									href={item.url}
									title={item.title}
									variable='main'
								>
									{item.shortTitle}
								</Button>
							)
						})
					) : (
						<SkeletonLoader
							count={3}
							className='h-[52px]'
						/>
					)}
				</div>
			</div>
		</m.div>
	)
}
