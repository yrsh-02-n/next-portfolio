import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../button/Button'

interface Props {
	title: string
	description: string
	url: string
	imageUrl: string
	alt: string
	className?: string
}

export function CaseCard({ title, description, url, imageUrl, alt, className }: Props) {
	return (
		<div className='relative flex flex-col max-w-full bg-secondary/70 shadow'>
			<Link
				href={url}
				className={cn('bg-white aspect-[16/9]', className)}
			>
				<Image
					src={'/mock.webp'}
					alt={alt}
					width={1920}
					height={1080}
					className='max-w-full max-h-full object-contain'
				/>
			</Link>
			<div className='p-5'>
				<h3 className='text-2xl max-xl:text-xl font-md text-light leading-[1.2] mb-[1rem]'>
					Заголовок Заголовок Заголовок Заголовок
				</h3>
				<p className='text-lg text-light/70 leading-[1.2] mb-[1.5rem]'>
					Текст на две строки Текст на две строки
				</p>
				<Button
					title={title}
					variable='main'
					href='/'
				>
					Смотреть
				</Button>
			</div>
		</div>
	)
}
