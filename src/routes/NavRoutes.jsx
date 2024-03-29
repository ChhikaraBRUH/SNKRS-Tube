import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Explore } from "../pages/Explore/Explore";
import { Login } from "../pages/AuthPages/Login";
import { Logout } from "../pages/AuthPages/Logout";
import { Signup } from "../pages/AuthPages/Signup";
import { SingleVideo } from "../pages/SingleVideo/SingleVideo";
import { Home } from "../pages/Home/Home";
import { History } from "../pages/History/History";
import { LikedVideos } from "../pages/LikedVideos/LikedVideos";
import { WatchLater } from "../pages/WatchLater/WatchLater";
import { MockmanPage } from "../pages/MockmanPage/mockmanPage";
import { PrivateRoute } from "./PrivateRoute";
import { Playlists } from "../pages/Playlists/Playlists";
import { SinglePlaylistPage } from "../pages/Playlists/components/SinglePlaylistPage";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/explore' element={<Explore />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/explore/:videoID' element={<SingleVideo />} />
			<Route path='/playlists/:playlistID' element={<SinglePlaylistPage />} />

			<Route
				path='/logout'
				element={
					<PrivateRoute>
						<Logout />
					</PrivateRoute>
				}
			/>
			<Route
				path='/liked'
				element={
					<PrivateRoute>
						<LikedVideos />
					</PrivateRoute>
				}
			/>
			<Route
				path='/watchlater'
				element={
					<PrivateRoute>
						<WatchLater />
					</PrivateRoute>
				}
			/>
			<Route
				path='/history'
				element={
					<PrivateRoute>
						<History />
					</PrivateRoute>
				}
			/>
			<Route
				path='/playlists'
				element={
					<PrivateRoute>
						<Playlists />
					</PrivateRoute>
				}
			/>
			<Route path='/mockman' element={<MockmanPage />} />
		</Routes>
	);
};

export { NavRoutes };
