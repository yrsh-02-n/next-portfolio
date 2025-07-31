'use client'

import { useEffect, useState } from "react"

interface Props {}

export function Resume({}: Props) {
  const [data, setData] = useState()

	useEffect(() => {
		fetch('/api/resume')
			.then(r => r.json())
			.then(data => {
				setData(data)
				// setIsLoading(false)
        
			})
			.catch(error => {
				// setIsLoading(false)
				// setError('Ошибка при загрузке блока. Пожалуйста, обновите страницу')
			})
	}, [])

  console.log(data);
  
	return <div>resume</div>
}
