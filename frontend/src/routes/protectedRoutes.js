import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;