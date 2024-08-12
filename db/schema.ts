import { One, relations } from "drizzle-orm";
import { integer, pgEnum, PgTable, pgTable, serial, text } from "drizzle-orm/pg-core";

export const coursesSchema = pgTable("courses", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	imgSrc: text("image_src").notNull(),
});

export const coursesRelations = relations(coursesSchema, ({ many }) => ({
	userProgress: many(userProgressSchema),
	units: many(unitsSchema),
}));

export const unitsSchema = pgTable("units", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	courseId: integer("course_id").references(() => coursesSchema.id, { onDelete: "cascade" }),
	order: integer("order").notNull(),
});

export const unitRelations = relations(unitsSchema, ({ many, one }) => ({
	course: one(coursesSchema, {
		fields: [unitsSchema.courseId],
		references: [coursesSchema.id],
	}),
	lessons: many(lessonsSchema),
}));

export const lessonsSchema = pgTable("lessons", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	unitId: integer("unit_id")
		.references(() => unitsSchema.id, { onDelete: "cascade" })
		.notNull(),
	order: integer("order").notNull(),
});

export const lessonRelations = relations(lessonsSchema, ({ one, many }) => ({
	unit: one(unitsSchema, {
		fields: [lessonsSchema.unitId],
		references: [unitsSchema.id],
	}),
	challenges: many(challengesSchema),
}));

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"]);

export const challengesSchema = pgTable("challenges", {
	id: serial("id").primaryKey(),
	lessonId: integer("lesson_id")
		.references(() => lessonsSchema.id, { onDelete: "cascade" })
		.notNull(),
	type: challengesEnum("type").notNull(),
	question: text("question").notNull(),
	order: integer("order").notNull(),
});
export const challengesRelations = relations(challengesSchema, ({ one, many }) => ({
	lesson: one(lessonsSchema, {
		fields: [challengesSchema.lessonId],
		references: [lessonsSchema.id],
	}),
}));

export const userProgressSchema = pgTable("user_progress", {
	userId: text("user_id").primaryKey(),
	userName: text("user_name").notNull().default("User"),
	userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
	activeCourseId: integer("active_course_id").references(() => coursesSchema.id, { onDelete: "cascade" }),
	hearts: integer("hearts").notNull().default(5),
	points: integer("points").notNull().default(0),
});

export const userRelations = relations(userProgressSchema, ({ one }) => ({
	activeCourse: one(coursesSchema, {
		fields: [userProgressSchema.activeCourseId],
		references: [coursesSchema.id],
	}),
}));
