import { useParams } from "react-router-dom";
import { useUserData } from "../../../context/userDataContext";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { PlaylistVideoCard } from "./PlaylistVideoCard";

const SinglePlaylistPage = () => {
	const { userDataState } = useUserData();
	const { playlistID } = useParams();
	const currentPlaylist = userDataState?.playlists.find((item) => item?._id == playlistID);
	return (
		<>
			<Sidebar />
			<div className='main-container'>
				<div className='single-playlist-container'>
					<h2>{currentPlaylist?.title} - Playlist</h2>
					<div className='single-playlist-videos'>
						{currentPlaylist?.videos.length > 0 ? (
							currentPlaylist?.videos.map((video) => {
								return <PlaylistVideoCard item={video} key={video?._id} playlist={currentPlaylist} />;
							})
						) : (
							<h5 className='single-playlist-no-videos-text'>No videos in this playlist. Go back to explore page and add some.</h5>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export { SinglePlaylistPage };
