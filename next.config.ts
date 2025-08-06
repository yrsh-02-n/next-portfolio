import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	// postcss: './postcss.config.next.mjs',
	// output: 'export',
	// experimental: {
	// 	ppr: 'incremental'
	// },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io'
			}
		]
	}
}

export default nextConfig
