// by keyframes in global.css
export function BgAnimation() {
	return (
		<div className='absolute inset-0 z-[-1] overflow-hidden'>
			<span className='animate-round-big absolute right-[-15rem] bottom-[-15rem] rounded-[100%] border-primary/18 border' />
			<span className='animate-round-small absolute right-[-15rem] bottom-[-15rem] rounded-[100%] border-primary/18 border' />
			<span className='animate-line-first absolute h-[1px] rotate-45 bg-primary/18' />
			<span className='animate-line-second absolute h-[1px] rotate-45 bg-primary/18' />
			<span className='animate-line-third absolute h-[1px] rotate-45 bg-primary/18' />
		</div>
	)
}
