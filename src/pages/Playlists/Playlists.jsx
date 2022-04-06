import { Link } from "react-router-dom";
import { PlaylistPopup } from "../../components/PlaylistPopup/PlaylistPopup";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useUserData } from "../../context/userDataContext";
import { PlaylistsListing } from "./components/PlaylistsListing";

import "./Playlists.css";

const Playlists = () => {
	const { userDataState } = useUserData();

	return (
		<>
			<Sidebar />
			<div className='main-container'>
				<div className='playlists-page-container'>
					{userDataState.playlists.length > 0 ? (
						<>
							<div className='playlists-top'>
								<h2>Your Playlists</h2>
							</div>

							<div className='playlists-listings'>
								<PlaylistsListing />
							</div>
						</>
					) : (
						<div className='no-playlists-videos-text'>
							<h2>No Playlists Added Yet!</h2>
							<Link to={"/explore"}>Go to explore page and add some playlists.</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export { Playlists };
