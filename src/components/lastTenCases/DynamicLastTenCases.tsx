'use client'

import dynamic from 'next/dynamic'

const DynLastTenCases = dynamic(() => import('./LastTenCases').then(mod => mod.LastTenCases))

export function DynamicLastTenCases() {
	return <DynLastTenCases />
}
