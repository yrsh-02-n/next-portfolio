'use client'

import dynamic from 'next/dynamic'

const DynResume = dynamic(() => import('./Resume').then(mod => mod.Resume))

export function DynamicResume() {
	return <DynResume />
}
