import { useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../context/authContext";
import { useUserData } from "../../context/userDataContext";
import { useVideos } from "../../context/videosContext";
import { addToLikesService, removeFromLikesService, addToWatchLaterService, removeFromWatchLaterService } from "../../services";
import { checkInPlaylist } from "../../util/checkInPlaylist";
import "./SingleVideo.css";

const SingleVideo = () => {
	const { videosState } = useVideos();
	const { videoID } = useParams();
	const currentVideo = videosState.videos?.find((item) => item._id == videoID);

	const { isAuth, token } = useAuth();
	const { userDataState, userDataDispatch } = useUserData();
	const navigate = useNavigate();
	const isVideoInLikes = checkInPlaylist(currentVideo, userDataState?.likes);
	const isVideoInWatchLater = checkInPlaylist(currentVideo, userDataState?.watchlater);

	const likeHandler = () => {
		if (isVideoInLikes) {
			removeFromLikesService(token, currentVideo, userDataDispatch);
		} else {
			addToLikesService(token, currentVideo, userDataDispatch);
		}
	};

	const watchlaterHandler = () => {
		if (isVideoInWatchLater) {
			removeFromWatchLaterService(token, currentVideo, userDataDispatch);
		} else {
			addToWatchLaterService(token, currentVideo, userDataDispatch);
		}
	};

	return (
		<>
			<Sidebar />
			<div className='main-container'>
				<div className='single-video-div'>
					<h3>{currentVideo?.title}</h3>

					<iframe
						src={`https://www.youtube.com/embed/${currentVideo?.youtubeID}`}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						className='youtube-video-player'></iframe>

					<div className='single-video-actions'>
						<button className={`btn btn-primary`} onClick={isAuth ? () => likeHandler() : () => navigate("/login")}>
							<div className={`${isVideoInLikes ? "material-icons icon-active-white" : "material-icons-outlined"}`}>thumb_up</div>
							{`${isVideoInLikes ? "LIKED!" : "LIKE"}`}
						</button>

						<button className={`btn btn-secondary`} onClick={isAuth ? () => watchlaterHandler() : () => navigate("/login")}>
							<div className={`${isVideoInWatchLater ? "material-icons icon-active-white" : "material-icons-outlined"}`}>
								{isVideoInWatchLater ? "bookmark_added" : "bookmark_border"}
							</div>
							{`${isVideoInWatchLater ? "ADDED TO WATCH LATER!" : "ADD TO WATCH LATER"}`}
						</button>

						<button className={`btn btn-secondary`}>
							<div className='material-icons-outlined'>playlist_add</div>Add To Playlist
						</button>
					</div>

					<div className='single-video-info'>
						<img className='single-video-channel-img' src={currentVideo?.channelImg} />
						<h5>{currentVideo?.channelName}</h5>
						{"|"}
						<div>Video Length: {currentVideo?.videoLength}</div>
						{"|"}
						<div>Category: {currentVideo?.category}</div>
					</div>

					<hr />

					<h5>Description</h5>
					<div>{currentVideo?.description}</div>
				</div>
			</div>
		</>
	);
};

export { SingleVideo };
