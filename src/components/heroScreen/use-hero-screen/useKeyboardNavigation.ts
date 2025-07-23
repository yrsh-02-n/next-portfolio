import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

import { IHeroScreenLink } from '../heroScreen.types'

interface Props {
	items: IHeroScreenLink[]
	onSelect: (index: number) => void
}

export function useKeyboardNavigation({ items, onSelect }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(0)

	useHotkeys('up', e => {
		e.preventDefault()
		setSelectedIndex(prev => Math.max(0, prev - 1))
	})

	useHotkeys('down', e => {
		e.preventDefault()
		setSelectedIndex(prev => Math.min(items.length - 1, prev + 1))
	})

	useHotkeys('enter', () => {
		onSelect(selectedIndex)
	})

	return { selectedIndex, setSelectedIndex }
}
