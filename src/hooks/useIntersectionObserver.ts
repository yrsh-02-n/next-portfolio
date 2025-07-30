import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const [element, setElement] = useState<Element | null>(null)

	const observer = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		if (!element) return

		observer.current = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting)
		}, options)

		observer.current.observe(element)

		return () => {
			if (observer.current) {
				observer.current.unobserve(element)
				observer.current.disconnect()
			}
		}
	}, [element, options])

	return { isIntersecting, setElement }
}
