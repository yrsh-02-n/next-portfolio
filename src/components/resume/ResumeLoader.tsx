import { SkeletonLoader } from '../ui/skeletonLoader/SkeletonLoader'

export function ResumeLoader() {
	return (
		<div>
			<div className='flex mb-[2rem] gap-[2rem]'>
				<SkeletonLoader
					count={2}
					className='w-full h-[137px]'
				/>
			</div>
			<div className='flex mb-[2rem] gap-[2rem]'>
				<SkeletonLoader
					count={2}
					className='w-full h-[137px]'
				/>
			</div>
			<div className='flex'>
				<SkeletonLoader
					count={1}
					className='w-full h-[137px]'
				/>
			</div>
			<div className='flex'>
				<SkeletonLoader
					count={1}
					className='w-full h-[137px]'
				/>
			</div>
		</div>
	)
}
