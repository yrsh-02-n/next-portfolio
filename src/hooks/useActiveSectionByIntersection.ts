'use client'

import { useEffect, useState } from 'react'

export function useActiveSectionByIntersection(sectionIds: string[]) {
	const [activeId, setActiveId] = useState<string | null>(null)

	useEffect(() => {
		// Map for store statr
		const intersectionStates = new Map<string, boolean>()

		const handleIntersect: IntersectionObserverCallback = entries => {
			// update state on intersect
			entries.forEach(entry => {
				intersectionStates.set(entry.target.id, entry.isIntersecting)
			})

			// find all intersected elements
			const currentlyIntersectingIds: string[] = []
			intersectionStates.forEach((isIntersecting, id) => {
				if (isIntersecting) {
					currentlyIntersectingIds.push(id)
				}
			})

			if (currentlyIntersectingIds.length > 0) {
				// select nearest to intersection element
				let closestId = currentlyIntersectingIds[0]
				let closestDistance = Infinity

				currentlyIntersectingIds.forEach(id => {
					const element = document.getElementById(id)
					if (element) {
						const rect = element.getBoundingClientRect()
						const elementCenter = rect.top + rect.height / 2
						const screenCenter = window.innerHeight / 2
						const distance = Math.abs(elementCenter - screenCenter)

						if (distance < closestDistance) {
							closestDistance = distance
							closestId = id
						}
					}
				})

				setActiveId(closestId)
			} else {
				// reset if nave not elements on intersect
				setActiveId(null)
			}
		}

		// IntersectionObserver
		const options = {
			root: null,
			threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
		}

		const observer = new IntersectionObserver(handleIntersect, options)

		sectionIds.forEach(id => {
			const element = document.getElementById(id)
			if (element) {
				observer.observe(element)
				intersectionStates.set(id, false)
			}
		})

		// clear on unmount
		return () => {
			observer.disconnect()
			intersectionStates.clear()
		}
	}, [sectionIds])

	return activeId
}
