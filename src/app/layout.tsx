import type { Metadata } from 'next'
import { Tektur } from 'next/font/google'
import { cookies } from 'next/headers'

import { BgAnimation } from '../components/layout/bgAnimation/BgAnimation'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import { Sidebar } from '../components/layout/sidebar/Sidebar'
import { Providers } from '../providers/Providers'

import './globals.css'

const tektur = Tektur({
	variable: '--font-tektur',
	weight: ['400', '500', '600']
})

export const metadata: Metadata = {
	title: 'Портфолио frontend-разработчика',
	description: 'Портфолио frontend-разработчика'
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const theme = (await cookies()).get('theme')?.value === 'dark' ? 'dark' : ''
	return (
		<html lang='ru-RU'>
			<body className={`${tektur.variable} antialiased font-text min-h-screen w-full ${theme}`}>
				<Providers>
					<div className='flex flex-col min-h-screen'>
						<Header />
						<main className='relative flex flex-1 mt-[73px] w-full'>
							<Sidebar />
							<div className='p-10 pl-[7.5rem] w-full max-md:p-5'>
								<div className='flex flex-col gap-20 mx-auto min-2xl:max-w-[90rem] max-w-[110rem]'>{children}</div>
							</div>
						</main>
						<Footer />
					</div>
					<BgAnimation />
				</Providers>
			</body>
		</html>
	)
}
