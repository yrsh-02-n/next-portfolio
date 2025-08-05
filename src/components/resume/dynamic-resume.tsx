'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const DynResume = dynamic(() => import('./resume').then(mod => mod.Resume), { ssr: false })

export function DynamicResume() {
	const [isVisible, setIsVisible] = useState(false)
	const sentinelRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{
				rootMargin: '50px',
				threshold: 0.1
			}
		)

		if (sentinelRef.current) {
			observer.observe(sentinelRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div
			ref={sentinelRef}
			className='w-full min-h-[200px]'
		>
			{isVisible && <DynResume />}
		</div>
	)
}
