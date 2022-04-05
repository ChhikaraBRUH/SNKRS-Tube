import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useUserData } from "../../context/userDataContext";
import { addToPlaylistService, removeFromPlaylistService, addPlaylistService } from "../../services";
import { checkInPlaylist } from "../../util/checkInPlaylist";
import "./PlaylistPopup.css";

export const PlaylistPopup = ({ video, setIsPlaylistPopupOpen }) => {
	const { token } = useAuth();
	const { userDataState, userDataDispatch } = useUserData();
	const [newPlaylistName, setNewPlaylistName] = useState("");

	const playlistPopupCreateBtnHandler = () => {
		if (newPlaylistName) {
			addPlaylistService(token, { playlist: { title: newPlaylistName, videos: [{ ...video }] } }, userDataDispatch);
			setNewPlaylistName("");
		} else if (!newPlaylistName) {
			alert("Please enter a valid playlist name!");
		}
	};

	return (
		<>
			<div className='playlist-popup-overlay'>
				<div className='playlist-popup-container'>
					<div className='material-icons playlist-popup-close-icon' onClick={() => setIsPlaylistPopupOpen(false)}>
						cancel
					</div>
					<h4 className='playlist-popup-heading'>Add To Playlist</h4>

					{userDataState?.playlists.map((playlist) => {
						let videoInThisPlaylist = checkInPlaylist(video, playlist.videos);
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
