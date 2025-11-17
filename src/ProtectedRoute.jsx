import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("userEmail");

  return loggedIn ? children : <Navigate to="/" />;
}
