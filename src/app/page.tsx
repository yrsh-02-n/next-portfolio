import { type SanityDocument } from 'next-sanity'
import Link from 'next/link'

import { client } from '@/sanity/lib/client'
import { HeroScreen } from '../components/heroScreen/heroScreen'
import { Heading } from '../components/heading/Heading'

// export const revalidate = 86400 // 1 day

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`

const options = { next: { revalidate: 30 } }

export default async function IndexPage() {
	const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)

	return (
		<>
    <HeroScreen />
		{/* Last projects */}
    <Heading isH1>Последние работы в портфолио</Heading>
		</>
	)
}
