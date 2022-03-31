import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useUserData } from "../../context/userDataContext";
import { WatchLaterListing } from "./components/WatchLaterListing";
import "./WatchLater.css";

const WatchLater = () => {
	const { userDataState } = useUserData();

	return (
		<>
			<Sidebar />
			<div className='main-container'>
				<div className='watch-later-page-container'>
					{userDataState.watchlater.length > 0 ? (
						<>
							<h2>Watch Later Saved Videos</h2>
							<div className='watch-later-container'>
								<WatchLaterListing />
							</div>
						</>
					) : (
						<div className='no-watch-later-text'>
							<h2>No Videos Saved In Watch Later</h2>
							<Link to={"/explore"}>Go to explore page to add to videos in watch later list.</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export { WatchLater };
