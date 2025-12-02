# GitHub User Search Application

A React app that allows users to search for GitHub profiles using the GitHub API.
🔍 GitHub User Search

A React app that lets you search for GitHub users and view their profile information, including repositories and stats. Built with modern React, Vite, and responsive design.

🧑‍💻 Features

## Search GitHub users by username

View user profile details: avatar, bio, followers, following, public repos

Browse user’s public repositories

Responsive design for desktop and mobile

### 🛠 Tech Stack

Frontend: React (Vite)

Routing: React Router

HTTP Requests: Fetch API (GitHub API)

Styling: Tailwind CSS (or CSS Modules / plain CSS, adjust as needed)

State Management: React hooks (useState, useEffect)

🚀 Getting Started
Prerequisites

Node.js v14+

npm or yarn

### Installation & Running Locally
git clone https://github.com/amanuel1221/alx-fe-reactjs.git
cd alx-fe-reactjs/github-user-search
npm install
npm run dev


## Live Demo

(https://alx-fe-reactjs-github-pi.vercel.app/ 

Build for Production
npm run build


### The build output will be in the dist/ folder (Vite production build).

## 💡 Usage

Enter a GitHub username in the search input.

Press Enter or click Search.

The user’s profile and repositories are displayed.

Click on a repository (if implemented) to view more details.

## 🔮 Future Improvements

Add loading and error states (User not found, spinner)

Pagination for users with many repositories

Sorting/filtering repos by stars, date, language

Dark mode / theme toggle

Unit tests with Jest + React Testing Library

Deploy to production (Netlify / Vercel) and add live demo link

## 📁 Suggested Folder Layout
github-user-search/
├─ src/
│  ├─ components/
│  │  ├─ SearchBar.jsx
│  │  ├─ UserProfile.jsx
│  │  └─ RepoList.jsx
│  ├─ pages/
│  │  └─ HomePage.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ public/
├─ dist/            # production build
├─ package.json
└─ README.md

## 👨‍💼 Why This Project Matters

This project demonstrates:

Fetching data from external APIs (GitHub API)

Dynamic data rendering in React

Routing with React Router

Responsive UI design
## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`
