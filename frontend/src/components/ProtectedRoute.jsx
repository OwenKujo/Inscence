import { Navigate } from "react-router-dom";
import { UserData } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading } = UserData();

  if (loading) return <div>Loading...</div>; // Show a loader while checking auth status

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
