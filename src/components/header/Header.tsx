import { HeaderMenu } from './HeaderMenu'
import { HEADER_DATA } from './header.data'

export function Header() {
	return (
		<header className='fixed w-full p-5 border-b border-primary bg-bg shrink-0'>
			<HeaderMenu menu={HEADER_DATA} />
		</header>
	)
}
