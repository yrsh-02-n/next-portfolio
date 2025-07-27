'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import React, { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
	return (
		<div>
			<LazyMotion features={domAnimation}>{children}</LazyMotion>
		</div>
	)
}
