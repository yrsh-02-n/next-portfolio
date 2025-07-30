import { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

export const useSlidesCount = () => {
	const [slidesCount, setSlidesCount] = useState<number>(5)
	const windowSize = useWindowSize()

	useEffect(() => {
		if (windowSize.width !== null) {
			if (windowSize.width < 610) {
				setSlidesCount(1)
			} else if (windowSize.width < 1024) {
				setSlidesCount(2)
			} else if (windowSize.width < 1460) {
				setSlidesCount(3)
			} else {
				setSlidesCount(5)
			}
		}
	}, [windowSize.width])
	return slidesCount
}
