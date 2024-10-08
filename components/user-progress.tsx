import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { coursesSchema } from "@/db/schema";

type Props = {
	activeCourse: typeof coursesSchema.$inferSelect;
	hearts: number;
	points: number;
	hasActiveSubscription: boolean;
};

function UserProgressComponent({ activeCourse, hearts, points, hasActiveSubscription }: Props) {
	return (
		<div className="flex items-center justify-between gap-x-2 w-full">
			<Link href={"/courses"}>
				<Button variant={"ghost"}>
					<Image
						src={activeCourse.imgSrc}
						className="rounded-md border"
						alt={activeCourse.title}
						height={32}
						width={32}
					/>
				</Button>
			</Link>
			<Link href={"/shop"}>
				<Button variant={"ghost"} className="text-orange-600">
					<Image src={"/points.svg"} height={28} width={28} alt="points" className="mr-2" />
					{points}
				</Button>
			</Link>
			<Link href={"/shop"}>
				<Button variant={"ghost"} className="text-rose-600">
					<Image src={"/heart.svg"} height={22} width={22} alt="hearts" className="mr-2" />
					{hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
				</Button>
			</Link>
		</div>
	);
}

export default UserProgressComponent;
