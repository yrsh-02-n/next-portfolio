import useTypeWriter from 'react-typewriter-hook'

export function HeroScreenTextItem({text}: {text: string}) {
	const typed = useTypeWriter(text)

	return (
		<div className='whitespace-pre-line text-2xl max-lg:text-lg'>
			<span>&gt; </span>
			<span>{typed}</span>
		</div>
	)
}
