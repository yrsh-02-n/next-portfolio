import type { Metadata } from 'next'
import { Tektur } from 'next/font/google'

import { BgAnimation } from '../components/layout/bgAnimation/BgAnimation'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import { Sidebar } from '../components/layout/sidebar/Sidebar'

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
			<body className={`${tektur.variable} antialiased font-text min-h-screen w-full`}>
				{/* <Providers> */}
				<div className='flex flex-col min-h-screen'>
					<Header />
					<main className='relative flex flex-1 mt-[73px] w-full'>
						<Sidebar />
						<section className='p-10 pl-[7.5rem] w-full max-md:p-5'>
							<div className='mx-auto min-2xl:max-w-[90rem] max-w-[110rem]'>{children}</div>
						</section>
					</main>
					<Footer />
				</div>
				<BgAnimation />
				{/* </Providers> */}
			</body>
		</html>
	)
}
