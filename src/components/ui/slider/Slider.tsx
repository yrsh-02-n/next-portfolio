'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ReactNode, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperClass } from 'swiper/react'

import { useSlidesCount } from '@/hooks/useSlidesCount'

import { SliderNavButton } from './slider-nav-button'

interface Props {
	children: ReactNode
}

export function Slider({ children }: Props) {
	const slidesCount = useSlidesCount()
	const swiperRef = useRef<SwiperClass | null>(null) // for use custom buttons

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
