import { HeroScreen } from '../components/heroScreen/HeroScreen'
import { DynamicLastTenCases } from '../components/lastTenCases/DynamicLastTenCases'
import { DynamicResume } from '../components/resume/DynamicResume'

export const revalidate = 86400 // 1 day

export default async function IndexPage() {
	return (
		<>
			<HeroScreen />
			<DynamicLastTenCases />
			<div id='about' className='scroll-m-[90px]'>
				<DynamicResume />
			</div>
		</>
	)
}
