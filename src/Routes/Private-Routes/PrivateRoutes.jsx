import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if(user) {
    return children
  }

  return <Navigate to="/auth/login" state={{from: location}} replace />;
};

export default PrivateRoutes;
