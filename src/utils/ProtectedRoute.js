import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, configRequired }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const hasConfigKey = localStorage.getItem("configKey");

  if (!isAuthenticated) return <Navigate to="/signin" />;
  if (configRequired && !hasConfigKey) return <Navigate to="/config" />;
  return children;
};

export default ProtectedRoute;