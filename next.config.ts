import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	// postcss: './postcss.config.next.mjs',
	output: 'export',
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
