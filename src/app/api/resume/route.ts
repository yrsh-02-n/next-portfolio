import { NextResponse } from 'next/server'

import { getResumeData } from '@/sanity/lib/queries'

export async function GET() {
	const data = await getResumeData()
	return NextResponse.json({
		goal: data?.goal,
		money: data?.money,
		stack: data?.stack ?? [],
		plan: data?.plan ?? [],
		additionalSkills: data?.additionalSkills ?? [],
		experienceCompany: data?.experience.company,
		experienceJobTitle: data?.experience.jobTitle,
		experienceYears: data?.experience.years,
		about: data?.about
	})
}
