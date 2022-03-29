import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useUserData } from "../../context/userDataContext";
import { LikedVideosListing } from "./components/LikedVideosListing";
import "./LikedVideos.css";

const LikedVideos = () => {
	const { userDataState } = useUserData();

	return (
		<>
			<Sidebar />
			<div className='main-container'>
				<div className='liked-videos-page-container'>
					{userDataState.likes.length > 0 ? (
						<>
							<h2>Your Liked Videos</h2>
							<div className='liked-videos-container'>
								<LikedVideosListing />
							</div>
						</>
					) : (
						<div className='no-liked-videos-text'>
							<h2>No Liked Videos</h2>
							<Link to={"/explore"}>Go to explore page to add to liked videos.</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export { LikedVideos };
