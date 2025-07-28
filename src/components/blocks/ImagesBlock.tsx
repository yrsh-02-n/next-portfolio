import Image from 'next/image'

export function MultipleImagesBlock({ block }: { block: any }) {
	const { images } = block

	if (!images?.length) {
		return null
	}

	return (
		<div className='mb-[3rem] shadow'>
			{' '}
			{/* или другой контейнер */}
			{images.map((image: any, index: number) => {
				const imageUrl = image?.asset?.url

				const width = image.asset?.metadata?.dimensions?.width || 1200
				const height = image.asset?.metadata?.dimensions?.height || 800

				return (
					<div
						key={index}
					>
						<Image
							src={imageUrl}
							alt='Изображение проекта'
							width={width}
							height={height}
							className='w-full h-auto object-contain'
						/>
					</div>
				)
			})}
		</div>
	)
}
