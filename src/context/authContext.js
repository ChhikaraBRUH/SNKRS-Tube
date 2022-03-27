import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const initialToken = localStorage.getItem("token");
	const [token, setToken] = useState(initialToken);

	const initialAuth = localStorage.getItem("isAuth");
	const [isAuth, setIsAuth] = useState(initialAuth);

	return <AuthContext.Provider value={{ token, setToken, isAuth, setIsAuth, navigate }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
