import { getCourses } from '@/db/queries'
import React from 'react'
import CoursesList from './courses-list.component'

async function CoursesPage() {
    const data = await getCourses()
    return (
        // <div className='h-full px-6'>
        <div className='h-full max-w-[912px] px-3 mx-auto'>
            <h1 className='text-2xl font-bold text-neutral-700'>
                My Courses
            </h1>
            <CoursesList courses={data} activeCourseId={1} />
        </div>
    )
}

export default CoursesPage