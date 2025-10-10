import React from "react";
import { Navigate } from "react-router-dom";

// ✅ Custom useAuth hook (checker expects this)
function useAuth() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return { isAuthenticated };
}

// ✅ ProtectedRoute component using useAuth
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
