import "dotenv/config";

import * as schema from "../db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DB_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
	try {
		console.log("seeding db...");
		await db.delete(schema.coursesSchema);
		await db.delete(schema.userProgressSchema);

		await db.insert(schema.coursesSchema).values([
			{
				id: 1,
				title: "Spanish",
				imgSrc: "/es.svg",
			},
			{
				id: 2,
				title: "French",
				imgSrc: "/fr.svg",
			},
			{
				id: 3,
				title: "Italian",
				imgSrc: "/it.svg",
			},
			{
				id: 4,
				title: "Croatian",
				imgSrc: "/hr.svg",
			},
			{
				id: 5,
				title: "Japanese",
				imgSrc: "/jp.svg",
			},
		]);

		console.log("seeding finished...");
	} catch (error) {
		console.log("-----------------------------------------------------");
		console.log("error seeding", error);
		console.log("-----------------------------------------------------");
		throw new Error("failed to seed db");
	}
};

main();
