'use client'

import dynamic from 'next/dynamic'

const DynLastTenCases = dynamic(() => import('./last-ten-cases').then(mod => mod.LastTenCases))

export function DynamicLastTenCases() {
	return <DynLastTenCases />
}
