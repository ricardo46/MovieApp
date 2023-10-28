import React from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const PrivateRoutes = () => {
  const { auth } = useUser();

  return <>{auth ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default PrivateRoutes;
