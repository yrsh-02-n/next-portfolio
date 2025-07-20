import type { Metadata } from 'next'
import { Tektur } from 'next/font/google'

import { Header } from '../components/header/Header'
import { Logo } from '../components/header/Logo'
import { Sidebar } from '../components/sidebar/Sidebar'

import './globals.css'
import { MobileMenu } from '../components/header/nav/MobileMenu'

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
			<body className={`${tektur.variable} antialiased font-text min-h-screen w-full`}>
				{/* <Providers> */}
				<div className='flex flex-col min-h-screen'>
					<Header />
					<main className='relative flex flex-1 mt-[73px] w-full'>
						<Sidebar />
						<section className='p-10 pl-[7.5rem] w-full max-md:p-5'>
							<div className='mx-auto max-4xl:max-w-[110rem]'>{children}</div>
						</section>
					</main>
				</div>
				{/* </Providers> */}
			</body>
		</html>
	)
}
