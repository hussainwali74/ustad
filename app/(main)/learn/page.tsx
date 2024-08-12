import FeedWrapperComponent from "@/components/feed-wrapper";
import StickyWrapperComponent from "@/components/sticky-wrapper";
import React from "react";
import Header from "./header";
import UserProgressComponent from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

export default async function Learn() {
	const userProgressData = getUserProgress();
	const [userProgress] = await Promise.all([userProgressData]);

	if (!userProgress || !userProgress.activeCourse) {
		redirect("/courses");
	}

	return (
		<div className="flex flex-row-reverse gap-[48px] px-6">
			<StickyWrapperComponent>
				<UserProgressComponent
					activeCourse={userProgress.activeCourse}
					hearts={userProgress.hearts}
					points={userProgress.points}
					hasActiveSubscription={false}
				/>
			</StickyWrapperComponent>

			<FeedWrapperComponent>
				<Header title={userProgress.activeCourse.title} />
				<div className="space-y-4 ">
					<div className="bg-sky-400 h-[400px]" />
				</div>
			</FeedWrapperComponent>
		</div>
	);
}
