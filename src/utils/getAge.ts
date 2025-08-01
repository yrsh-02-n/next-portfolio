import { format } from 'date-fns'

export function getAge(birthYear: number) {
	const currentYear = +format(new Date(), 'yyyy')
	const age = currentYear - birthYear
	let ageWord = 'лет'

	const ageStr = age.toString()
	const lastDigit = ageStr.slice(-1)
	const lastTwoDigits = ageStr.slice(-2)

	if (!['11', '12', '13', '14'].includes(lastTwoDigits)) {
		if (lastDigit === '1') {
			ageWord = 'год'
		} else if (['2', '3', '4'].includes(lastDigit)) {
			ageWord = 'года'
		}
	}

	return `${age} ${ageWord}`
}
