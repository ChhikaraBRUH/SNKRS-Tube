import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LikedVideosListing } from "./components/LikedVideosListing";
import "./LikedVideos.css";

const LikedVideos = () => {
	return (
		<>
			<Sidebar />
			<div className='main-container'>
				<div className='liked-videos-page-container'>
					<h2>Your Liked Videos</h2>
					<div className='liked-videos-container'>
						<LikedVideosListing />
					</div>
				</div>
			</div>
		</>
	);
};

export { LikedVideos };
