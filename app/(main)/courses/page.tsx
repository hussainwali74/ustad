import { getCourses, getUserProgress } from "@/db/queries";
import React from "react";
import CoursesList from "./courses-list.component";

async function CoursesPage() {
	const coursesData = getCourses();
	const userProgressData = getUserProgress();

	const [courses, userProgressDatas] = await Promise.all([coursesData, userProgressData]);
	// if(!userProgressData || !userProgressData.ac)
	return (
		// <div className='h-full px-6'>
		<div className="h-full max-w-[912px] px-3 mx-auto">
			<h1 className="text-2xl font-bold text-neutral-700">My Courses</h1>
			<CoursesList courses={courses} activeCourseId={userProgressDatas?.activeCourseId} />
		</div>
	);
}

export default CoursesPage;
