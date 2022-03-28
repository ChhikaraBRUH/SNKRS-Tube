import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/AuthPages/Login";
import { Logout } from "../pages/AuthPages/Logout";
import { Signup } from "../pages/AuthPages/Signup";
import { Home } from "../pages/Home/Home";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/logout' element={<Logout />} />
		</Routes>
	);
};

export { NavRoutes };
