'use client'

import dynamic from 'next/dynamic'

const DynLastTenCases = dynamic(() => import('./LastTenCases').then(mod => mod.LastTenCases), {
	ssr: false
})

export function DynamicLastTenCases() {
	return <DynLastTenCases />
}
