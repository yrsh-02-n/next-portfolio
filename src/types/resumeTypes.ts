
export interface IResume {
	goal: string
	money: string
	about: string[]
	additionalSkills: string[]
	plan: string[]
	stack: string[]
  experience: {company: string, jobTitle: string, years: string}[]
}