import { useParams } from "react-router-dom";
import { useUserData } from "../../../context/userDataContext";
import { VideoCard } from "../../../components/VideoCard/VideoCard";
import { Sidebar } from "../../../components/Sidebar/Sidebar";

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
						{currentPlaylist?.videos.map((video) => {
							return <VideoCard item={video} key={video?._id} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export { SinglePlaylistPage };
