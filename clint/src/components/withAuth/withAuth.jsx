import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const token = localStorage.getItem("jwt_token");

    if (!token) {
      return <Navigate to="/" />;
    }

    return <Component />;
  };

  return AuthRoute;
};

export default withAuth;
