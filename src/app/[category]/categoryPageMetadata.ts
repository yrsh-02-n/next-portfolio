import type { Metadata } from 'next'

type CategoryPageMetadataProps = {
	params: Promise<{ category: string }>
}

/**
 * @param {CategoryPageMetadataProps} props
 * @returns {Promise<Metadata>}
 */

export async function generateCategoryPageMetadata({
	params
}: CategoryPageMetadataProps): Promise<Metadata> {
	const resolvedParams = await params
	const category = resolvedParams.category?.toLowerCase()

	if (!category || !['dev', 'design'].includes(category)) {
		return {
			title: 'Страница не найдена',
			description: 'Запрашиваемая страница не существует.'
		}
	}

	const title =
		category === 'dev'
			? 'Портфолио: Frontend-разработка | Кирилл Л.'
			: 'Портфолио: Web-дизайн | Кирилл Л.'

	const description =
		category === 'dev'
			? 'Мои проекты по frontend-разработке: Next.js, React, TypeScript.'
			: 'Мои работы по web-дизайну: UI/UX, Tilda, Figma'

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: 'https://yrshdev.ru/og-image.jpg',
					width: 1200,
					height: 630,
					alt: 'Портфолио frontend-разработичика и web-дизайнера Кирилла Л.'
				}
			],
			locale: 'ru_RU',
			type: 'website'
		}
	}
}

export type { CategoryPageMetadataProps }
