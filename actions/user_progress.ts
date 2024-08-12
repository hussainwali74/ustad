"use server";

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgressSchema } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
	const { userId } = auth();
	const user = await currentUser();

	if (!userId || !user) {
		throw new Error("Unauthorized");
	}

	const course = await getCourseById(courseId);
	if (!course) {
		throw new Error("course not found");
	}

	// throw new Error("course ");

	//  TODO: once units and lessons added
	// if(!course.units.length || !course.units[0].lessons.length){
	//     throw new Error('course is empty')
	// }

	const existingUserProgress = await getUserProgress();
	if (existingUserProgress) {
		await db.update(userProgressSchema).set({
			activeCourseId: courseId,
			userName: user.firstName || "User",
			userImageSrc: user.imageUrl || "/mascot.svg",
		});
		revalidatePath("/courses");
		revalidatePath("/learn");
		redirect("/learn");
	}

	await db.insert(userProgressSchema).values({
		userId: userId,
		activeCourseId: courseId,
		userName: user.firstName || "User",
		userImageSrc: user.imageUrl || "/mascot.svg",
	});
	revalidatePath("/courses");
	revalidatePath("/learn");
	redirect("/learn");
};
