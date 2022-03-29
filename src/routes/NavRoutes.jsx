import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/AuthPages/Login";
import { Logout } from "../pages/AuthPages/Logout";
import { Signup } from "../pages/AuthPages/Signup";
import { Explore } from "../pages/Explore/Explore";
import { Home } from "../pages/Home/Home";
import { LikedVideos } from "../pages/LikedVideos/LikedVideos";
import { PrivateRoute } from "./PrivateRoute";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/logout' element={<Logout />} />
			<Route path='/explore' element={<Explore />} />
			<Route
				path='/liked'
				element={
					<PrivateRoute>
						<LikedVideos />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
};

export { NavRoutes };
