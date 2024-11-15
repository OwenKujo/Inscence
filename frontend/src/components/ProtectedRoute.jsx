import React from 'react'; 
import { Navigate } from "react-router-dom";
import { UserData } from "../context/UserContext"; 

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading, user } = UserData();  // Destructure user data from context

  if (loading) return <div>Loading...</div>; // Show a loader while checking auth status

  if (!isAuth) {
    return <Navigate to="/login" replace />;  // Redirect to login if not authenticated
  }

  // Pass the user data to the children (if needed)
  return React.cloneElement(children, { user });  // Pass the user data as a prop to the child
};

export default ProtectedRoute;
