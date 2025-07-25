'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ReactNode, useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperClass } from 'swiper/react'
import { useWindowSize } from 'usehooks-ts'

import { SliderNavButton } from './SliderNavButton'

interface Props {
	children: ReactNode
}

export function Slider({ children }: Props) {
	const windowSize = useWindowSize()
	const [slidesCount, setSlidesCount] = useState<number>(4)
	const swiperRef = useRef<SwiperClass | null>(null) // for use custom buttons

	// change count of slides on screen based on window screen on resize
	useEffect(() => {
		if (windowSize.width !== null) {
			if (windowSize.width < 610) {
				setSlidesCount(1)
			} else if (windowSize.width < 1024) {
				setSlidesCount(2)
			} else if (windowSize.width < 1460) {
				setSlidesCount(3)
			} else {
				setSlidesCount(4)
			}
		}
	}, [windowSize.width])

  // !!! DOTS AND MAIN STYLES OF SLIDER CUSTOMIZED IN GLOBAL.CSS !!!

	return (
		<div className='relative'>
			<div className='absolute top-[-5.5rem] right-[0rem] flex gap-[1rem] max-md:hidden'>
				<SliderNavButton
					className=''
					onClick={() => swiperRef!.current!.slidePrev()}
				>
					<ChevronLeft size={32} />
				</SliderNavButton>
				<SliderNavButton
					className=''
					onClick={() => swiperRef!.current!.slideNext()}
				>
					<ChevronRight size={32} />
				</SliderNavButton>
			</div>

			<Swiper
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				slidesPerView={slidesCount}
				spaceBetween={41}
				freeMode={true}
				loop={true}
				autoplay
				pagination={{
					clickable: true
				}}
				modules={[FreeMode, Pagination, Navigation]}
				className='mySwiper'
			>
				{children}
			</Swiper>
		</div>
	)
}
