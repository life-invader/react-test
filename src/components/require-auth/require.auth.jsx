import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { loggedIn } = useSelector((state) => state.user);

  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
