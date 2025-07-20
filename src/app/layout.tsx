import type { Metadata } from 'next'
import { Tektur } from 'next/font/google'

import { Header } from '../components/header/Header'
import { Sidebar } from '../components/sidebar/Sidebar'

import './globals.css'

const tektur = Tektur({
	variable: '--font-tektur',
	weight: ['400', '500', '600']
})

export const metadata: Metadata = {
	title: 'Портфолио frontend-разработчика',
	description: 'Портфолио frontend-разработчика'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru-RU'>
			<body className={`${tektur.variable} antialiased font-text h-screen`}>
				{/* <Providers> */}
				<div className='flex flex-col min-h-screen'>
					<Header />
					<div className='flex flex-1'>
						<Sidebar />
						<main className='mt-[73px] mx-auto flex-1 p-10 max-w-[1480px] w-full'>{children}</main>
					</div>
				</div>
				{/* </Providers> */}
			</body>
		</html>
	)
}
