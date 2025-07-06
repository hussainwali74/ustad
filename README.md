# Ustad

Ustad is a modern, gamified learning platform designed to help users enroll in courses, track their progress, and stay engaged through points and hearts (similar to lives or energy). Inspired by popular language-learning apps, Ustad brings together course management, user progress tracking, and a motivational user interface for an immersive educational experience.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Screens and Main Flows](#screens-and-main-flows)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Ustad** enables users to:
- Browse and enroll in available courses.
- Track and visualize their learning progress.
- Earn points and manage hearts (lives/energy) as they engage with lessons.
- Navigate a friendly and motivational interface, designed for both desktop and mobile.

The platform leverages Next.js for both frontend and backend logic, using a modern "app" directory structure, server actions, and type-safe database models.

---

## Key Features

### 1. Course Management
- **Browse Courses**: Users see a grid of available courses, each with a title and an image.
- **Activation**: Selecting a course sets it as the user's "active course," updating their learning journey.

### 2. Learning Dashboard
- **Personalized Progress**: The `/learn` dashboard displays the user's current active course, their hearts (lives), and points (achievements).
- **Gamification**: Hearts limit the number of mistakes or attempts, while points reward learning activity and success.
- **Shop Access**: Quick links to a shop where users can spend points or hearts.

### 3. Seamless Navigation
- **Sidebar Navigation**: Desktop users get a persistent sidebar for quick access to Learn, Leaderboard, and Quests.
- **Mobile-Friendly**: Responsive layout with a mobile header for users on smaller screens.

### 4. Persistent User Progress
- **Database-Backed Progress**: Each user's actions and learning progress are saved in a relational database.
- **Authentication**: User accounts and progress tracking are handled securely with Clerk.

### 5. Expandable Architecture
- **Units & Lessons (Planned/Scaffolded)**: The backend is designed to support courses with multiple units and lessons, enabling further expansion.

---

## How It Works

1. **Sign Up / Log In**
   - Users authenticate with Clerk and begin with a default profile.

2. **Browse and Select Courses**
   - Users view all available courses and select one to set as their active focus.

3. **Start Learning**
   - The `/learn` dashboard reflects their progress, hearts, and points.
   - Only users with an active course can access the learning dashboard; otherwise, they're redirected to course selection.

4. **Track Progress**
   - As users participate in activities (future: lessons, quizzes), their hearts and points are updated.
   - User progress is always saved to the database, enabling persistent login and cross-device continuity.

---

## Screens and Main Flows

- **/courses**: Browse and activate courses.
- **/learn**: Main learning dashboard, showing progress, hearts, points, and access to the shop.
- **Sidebar**: Access Leaderboard, Quests, and other future features.
- **User Progress Bar**: Shows current course, hearts, and points at a glance.

---

## Technology Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/) (App Router, Server/Client Components)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: Type-safe relational schema using Drizzle ORM
- **State Management**: React/Next.js hooks, server actions
- **Styling**: Tailwind CSS (with custom responsive layouts)
- **Icons**: Lucide React
- **Image Optimization**: Next.js `Image` component

---

## Project Structure

```
ustad/
├── app/
│   ├── (main)/         # Main page flows (courses, learn, etc.)
│   ├── layout.tsx      # App-wide layout and providers
│   └── page.tsx        # Entry point
├── components/         # UI components (sidebar, user progress, etc.)
├── db/                 # Database schema and queries (Drizzle ORM)
├── actions/            # Server actions for user progress and more
├── public/             # Static assets (images, icons)
├── styles/             # Global and component CSS
├── README.md
└── ...
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Package manager: npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/hussainwali74/ustad.git
cd ustad
npm install
# or yarn install / pnpm install / bun install
```

### Running the App

Start the development server:

```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for bug fixes, enhancements, or new features.

---
