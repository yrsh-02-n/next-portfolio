import { HeroScreen } from '../components/heroScreen/heroScreen'
import { DynamicLastTenCases } from '../components/layout/lastTenCases/DynamicLastTenCases'

export const revalidate = 86400 // 1 day


export default async function IndexPage() {
	return (
		<>
			<HeroScreen />
			<DynamicLastTenCases />
		</>
	)
}
