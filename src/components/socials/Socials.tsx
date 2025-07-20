import Image from 'next/image'
import Link from 'next/link'

import { ISocials } from './socials.types'
import { getSocials } from '@/src/app/api/routes'

export async function Socials() {
	const links = await getSocials()
  console.log(links);
  
	return (
		<div className='flex flex-col gap-3'>
			{links.map((link: ISocials) => (
				<Link
					key={link._id}
					href={link.url}
					aria-label={link.title}
          title={link.title}
					target={'_blank'}
					rel='noopener noreferrer'
					className='block'
				>
					<span className='flex justify-center p-[.6rem] w-11 bg-primary rounded transition-colors hover:bg-accent duration-200'>
						<Image
							src={link.icon}
							alt={link.title}
							width={24}
							height={24}
						/>
					</span>
				</Link>
			))}
		</div>
	)
}
