import { client } from './client'

// social links with icon
export async function getSocials() {
	return client.fetch(
		`*[_type == "socialLink"] | order(order asc){
      _id,
      url,
      "icon": icon.asset->url,
      title,
      order
    }`,
		{},
		{ next: { revalidate: 3600 } } // 1 hour cache
	)
}
