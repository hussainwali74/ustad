import { cache } from "react";
import db from "./drizzle";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { coursesSchema, userProgressSchema } from "./schema";

export const getCourses = cache(async () => {
	const data = await db.query.coursesSchema.findMany();
	return data;
});

export const getUserProgress = cache(async () => {
	const { userId } = await auth();
	if (!userId) {
		return null;
	}

	const data = await db.query.userProgressSchema.findFirst({
		where: eq(userProgressSchema.userId, userId),
		with: {
			activeCourse: true,
		},
	});

	return data;
});

export const getCourseById = cache(async (courseId: number) => {
	const data = await db.query.coursesSchema.findFirst({
		where: eq(coursesSchema.id, courseId),
		// TODO: populate units and lessons
	});

	return data;
});
