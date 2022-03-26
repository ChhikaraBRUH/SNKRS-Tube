import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";

const PrivateRoute = ({ children }) => {
	const { isAuth } = useAuth();
	return isAuth ? children : <Navigate to='/login' />;
};

export { PrivateRoute };
