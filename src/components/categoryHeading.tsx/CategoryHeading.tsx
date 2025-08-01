'use client'

import { m } from 'framer-motion'
import Image from 'next/image'

import { Heading } from '../headings/Heading'

interface headingBlockProps {
	title: string
	description?: string
	image: string
}

export function CategoryHeading({ title, description, image}: headingBlockProps) {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<section className='relative mb-[3rem] border-b border-accent'>
				<div className='relative w-full h-full shadow p-[2rem] max-s:p-[1rem] min-h-[15rem] flex flex-col justify-center'>
					<div className='absolute inset-0 h-auto saturate-0'>
						<Image
							alt={title}
							src={image}
							fill
							className='object-cover aspect-[16/9] object-top-right bg-right'
						/>
					</div>

					<div className='absolute inset-0 bg-secondary/90 z-1'></div>
					<div className='relative flex flex-col w-full lg:w-[70%] z-3'>
						<Heading
							className='mb-[1rem] text-light'
							isH1
						>
							{title}
						</Heading>
						<div className='text-2xl max-s:text-lg text-light'>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</section>
		</m.div>
	)
}
