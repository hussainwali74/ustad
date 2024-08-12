"use client";
import React, { useTransition } from "react";
import { coursesSchema, userProgressSchema } from "@/db/schema";
import CourseCard from "./course-card.component";
import { useRouter } from "next/navigation";
import { upsertUserProgress } from "@/actions/user_progress";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

type Props = {
	courses: (typeof coursesSchema.$inferSelect)[];
	activeCourseId?: typeof userProgressSchema.$inferSelect.activeCourseId;
};

function CoursesList({ courses, activeCourseId }: Props) {
	const router = useRouter();
	const [pending, startTransition] = useTransition();

	const onClick = (id: number) => {
		if (pending) return;
		if (id == activeCourseId) {
			return router.push("/learn");
		}
		startTransition(() => {
			upsertUserProgress(id).catch((e) => {
				// const toast = Toaster()
				toast.error("something went wrong");
			});
		});
	};

	return (
		<div className="pt-6 grid-cols-2 grid lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
			{courses.map((course, i) => (
				<CourseCard
					key={course.id}
					id={course.id}
					title={course.title}
					imgSrc={course.imgSrc}
					onClick={onClick}
					disabled={pending}
					active={i + 1 == activeCourseId}
				/>
			))}
		</div>
	);
}

export default CoursesList;
