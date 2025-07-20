import { client } from '@/sanity/lib/client'

export async function getSocials() {
	return client.fetch(`*[_type == "socialLink"] | order(Order asc){
    _id,
    url,
    "icon": icon.asset->url,
    title,
    order
  }`)
}
