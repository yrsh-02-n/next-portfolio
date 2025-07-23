'use client'

import { useEffect, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

import { HeroScreenTextItem } from './hero-screen-components/HeroScreenTextItem'
import { HeroScreenLink } from './hero-screen-components/heroScreenLink'
import { IHeroScreenData } from './heroScreen.types'
import { useKeyboardNavigation } from './use-hero-screen/useKeyboardNavigation'

export function HeroScreen() {
	const [data, setData] = useState<IHeroScreenData>()
	const [isShowLinks, setIsShowLinks] = useState<boolean>(false)

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
			.then(setData)
	}, [])

	// show links after text typed
	useEffect(() => {
		setTimeout(() => {
			setIsShowLinks(true)
		}, 13400)
	}, [setIsShowLinks])

	if (!data) return null

	return (
		<div className='flex justify-between gap-20 max-md:flex-col'>
			<div
				className={
					'w-[60%] max-md:w-full text-bg h-[50vh] px-6 py-4 bg-secondary/50 rounded-md shadow-lg'
				}
			>
				{/* text lines from sanity */}
				<div className='mb-6 max-md:text-xl'>
					<HeroScreenTextItem text={data?.text.join('\n > ') ?? ''} />
				</div>

				{/* links with keyboard control from sanity */}
				<div className='flex flex-col text-2xl max-md:text-xl max-w-fit'>
					{isShowLinks &&
						data?.links?.map((item, i) => {
							return (
								<HeroScreenLink
									key={i}
									url={item.url}
									title={item.title}
									className={i === selectedIndex ? 'px-0 text-accent font-medium' : 'px-[1.29rem]'}
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
			<div>img</div>
		</div>
	)
}
