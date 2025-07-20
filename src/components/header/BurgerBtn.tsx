import { Menu } from 'lucide-react'
import { MouseEvent } from 'react'

interface Props {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export function BurgerBtn({ onClick }: Props) {
	return (
		<button
			className='p-5 md:hidden'
			onClick={onClick}
		>
			<Menu />
		</button>
	)
}
