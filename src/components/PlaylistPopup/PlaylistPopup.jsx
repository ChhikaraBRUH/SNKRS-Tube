import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useUserData } from "../../context/userDataContext";
import { addToPlaylistService, removeFromPlaylistService, addPlaylistService } from "../../services";
import { checkInPlaylist } from "../../util/checkInPlaylist";
import "./PlaylistPopup.css";

export const PlaylistPopup = ({ video }) => {
	const { isAuth, token } = useAuth();
	const { userDataState, userDataDispatch } = useUserData();
	// const [popupOpen, setPopupOpen] = useState(isPlaylistPopupOpen);
	const [newPlaylistName, setNewPlaylistName] = useState("");

	// const popupToggle = () => {
	// 	setPopupOpen((popupOpen) => !popupOpen);
	// };

	const playlistPopupCreateBtnHandler = () => {
		addPlaylistService(token, { playlist: { title: newPlaylistName, videos: [{ ...video }] } }, userDataDispatch);
	};

	return (
		<>
			<div className='playlist-popup-overlay'>
				<div className='playlist-popup-container'>
					{/* <div className='material-icons playlist-popup-close-icon' onClick={popupToggle}>
							cancel
						</div> */}
					<h4 className='playlist-popup-heading'>Add To Playlist</h4>

					{userDataState?.playlists.map((playlist) => {
						const videoInThisPlaylist = checkInPlaylist(video, playlist.videos);
						const checkboxHandler = () => {
							videoInThisPlaylist
								? removeFromPlaylistService(token, playlist, video, userDataDispatch)
								: addToPlaylistService(token, playlist, video, userDataDispatch);
						};
						return (
							<div className='playlist-popup-items' key={playlist?._id}>
								<input type='checkbox' checked={videoInThisPlaylist} onChange={checkboxHandler} />
								{playlist?.title}
							</div>
						);
					})}

					<hr />
					<input
						className='playlist-popup-new-input'
						placeholder='Create New Playlist...'
						value={newPlaylistName}
						onChange={(e) => setNewPlaylistName(e.target.value)}
					/>
					<button className='btn btn-primary-outlined playlist-popup-new-btn' onClick={playlistPopupCreateBtnHandler}>
						Create
					</button>
				</div>
			</div>
		</>
	);
};
