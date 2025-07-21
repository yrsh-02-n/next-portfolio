import { format } from 'date-fns'

export function Footer() {
	const currentYear = format(new Date(), 'yyyy')
	return (
		<footer className='ml-[5rem] p-4.5 bg-bg md:bg-bg/70 border-primary/40 border-t max-md:p-5 max-md:ml-0'>
			<span>Sitename 2021-{currentYear}</span>
		</footer>
	)
}
