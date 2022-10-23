import CourseCard from '../components/CourseCard';
import { useEffect, useState } from 'react'
import Loading from '../components/Loading';
// import courses_data from '../data/courses';

export default function Courses() {
	const [courses, setCourses] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect((isLoading) => {
		setIsLoading(true)

		fetch(`${process.env.REACT_APP_API_URL}/courses/`)
			.then(response => response.json())
			.then(result => {
				setCourses(
					result.map(course => {
						return (

							<CourseCard key={course._id} course={course} />
						)
					})
				)
				setIsLoading(false)
			})
	}, [])


	return (
		<>
			{
				(isLoading)
					?
					<Loading />
					:
					<>
						{courses}
					</>
			}

		</>

	)
}

