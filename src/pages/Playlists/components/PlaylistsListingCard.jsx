import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useUserData } from "../../../context/userDataContext";
import { removePlaylistService } from "../../../services";

import "../Playlists.css";

const PlaylistsListingCard = ({ item }) => {
	const { isAuth, token } = useAuth();
	const { userDataState, userDataDispatch } = useUserData();
	const navigate = useNavigate();

	const navigateToSinglePlaylist = () => {
		if (isAuth) {
			navigate(`/playlists/${item?._id}`);
		}
	};

	return (
		<div className='playlists-card-container'>
			<div className='playlists-card-middle'>
				<div className='playlists-card-names'>
					<div className='playlists-name'>{item?.title}</div>
				</div>

				<div className='playlists-card-btns-div'>
					<button className='btn btn-secondary-outlined playlists-btn' onClick={navigateToSinglePlaylist}>
						View The Playlist<div className='material-icons playlists-icon'>navigate_next</div>
					</button>
					<button className='btn btn-primary-outlined playlists-btn' onClick={() => removePlaylistService(token, item, userDataDispatch)}>
						<div className='material-icons playlists-delete-icon'>delete</div>Delete This Playlist
					</button>
				</div>
			</div>
		</div>
	);
};

export { PlaylistsListingCard };
