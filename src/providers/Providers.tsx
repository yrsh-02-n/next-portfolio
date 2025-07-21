import React, { ReactNode } from 'react'

import { getServerTheme } from '../components/theme/theme-cookie'

export function Providers({ children }: { children: ReactNode }) {
	const theme = getServerTheme()
	return <div className={`${theme}`}>{children}</div>
}
