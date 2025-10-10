import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <h1>Advanced Routing Demo</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/blog">Blog</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Protected Route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic Route */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
