import type { Metadata } from 'next'
import { client } from 'sanity/client'

type CasePageMetadataProps = {
	params: Promise<{ slug: string; category: string }>
}

/**
 * @param {CasePageMetadataProps} props
 * @returns {Promise<Metadata>}
 */

export async function generateCasePageMetadata({
	params
}: CasePageMetadataProps): Promise<Metadata> {
	const resolvedParams = await params
	const slug = resolvedParams.slug
	const category = resolvedParams.category?.toLowerCase()

	if (!category || !['dev', 'design'].includes(category)) {
		return {
			title: 'Страница не найдена',
			description: 'Запрашиваемый кейс не найден.'
		}
	}

	try {
		const caseData = await client.fetch(
			`*[_type == "portfolioCase" && slug.current == $slug && caseCategory == $category][0]{
        caseTitle,
        caseDescription,
      }`,
			{ slug, category }
		)

		if (!caseData) {
			return {
				title: 'Страница не найдена',
				description: 'Запрашиваемый кейс не найден.'
			}
		}

		const title = caseData.caseTitle ? `${caseData.caseTitle} | Кирилл Л.` : `Кейс | Кирилл Л.`

		let description = 'Проект'
		if (caseData.caseDescription) {
			description =
				caseData.caseDescription.length > 157
					? caseData.caseDescription.slice(0, 157) + '...'
					: caseData.caseDescription
		}

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
				type: 'article'
			}
		}
	} catch (error) {
		console.error('Ошибка при генерации метаданных для кейса:', error)
		return {
			title: 'Страница кейса | Кирилл Л.',
			description: 'Проект'
		}
	}
}
