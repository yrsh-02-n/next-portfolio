import Image from 'next/image'

export function HeroScreenImage() {
	return (
		// background
		<div className='relative overflow-hidden w-full h-full bg-primary rounded-md bg-radial from-[#ffffff] to-[#4a4a47]'>
			{/* interference effect */}
			<div className='absolute opacity-40 z-11 overflow-hidden w-full h-full before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[linear-gradient(rgba(0,0,0,.5)_0px,_rgba(0,0,0,0)_2px,_rgba(0,0,0,.7)_3px)] before:bg-size-[100%_4px] before:animate-interference before:transform-origin-[0_0%]' />

			<Image
				alt='Фото владельца сайта'
				src='/author.png'
				fill
				className='absolute animate-glitch opacity-100 z-[10] object-cover rounded-md bg-blend-hard-light'
			/>
		</div>
	)
}
