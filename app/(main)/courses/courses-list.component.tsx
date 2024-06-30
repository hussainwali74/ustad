"use client"
import React from 'react'
import { courses } from '@/db/schema'
import CourseCard from './course-card.component'
type Props = {
    courses: typeof courses.$inferSelect[]
    activeCourseId: number
}
function CoursesList({ courses, activeCourseId }: Props) {
    return (
        <div className='pt-6 grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imgSrc={course.imgSrc}
                    onClick={() => { }}
                    disabled={false}
                    active={course.id == activeCourseId}
                />
            ))}
        </div>
    )
}

export default CoursesList