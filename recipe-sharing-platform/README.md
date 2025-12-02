# 🍽️ Recipe Sharing Platform

A React-based web application for browsing, searching, and saving recipes — complete with user authentication, favorites, and a clean, responsive UI.

---

## 🔗 Live Demo  
[🚀 View Live App](https://recipe-finder-app-three-ecru.vercel.app/)

---

## Screenshots 
[Homepage](./public/screenshots/homepage.png)

## 🌟 Features  

- Search for recipes by name or keyword using a real API (TheMealDB).  
- View detailed recipe pages with ingredients, instructions, category, and origin.  
- Sign up / sign in (via Firebase Auth) to save your favorite recipes.  
- Add or remove favorites — synchronized with Firestore database under `users/{uid}.favorites`.  
- User profile support (display name & avatar).  
- Responsive design with mobile-first layout.  

---

## 🛠️ Tech Stack  

- **Frontend:** React (Vite)  
- **Styling:** Tailwind CSS  
- **State Management:** Zustand  
- **Routing:** React Router  
- **API:** TheMealDB  
- **Auth & Database:** Firebase Auth + Firestore  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js & npm installed  

### Installation  

```bash
git clone https://github.com/amanuel1221/alx-fe-reactjs.git
cd alx-fe-reactjs/recipe-sharing-platform
npm install
npm start