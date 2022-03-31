import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useUserData } from "../../context/userDataContext";
import { addToLikesService, removeFromLikesService } from "../../services/LikesServices";
import { addToWatchLaterService, removeFromWatchLaterService } from "../../services/WatchLaterServices";

import { checkInPlaylist } from "../../util/checkInPlaylist";
import "./VideoCard.css";

const VideoCard = ({ item }) => {
	const { isAuth, token } = useAuth();
	const { userDataState, userDataDispatch } = useUserData();
	const navigate = useNavigate();
	const isVideoInLikes = checkInPlaylist(item, userDataState.likes);
	const isVideoInWatchLater = checkInPlaylist(item, userDataState.watchlater);

	const likeHandler = () => {
		if (isVideoInLikes) {
			removeFromLikesService(token, item, userDataDispatch);
		} else {
			addToLikesService(token, item, userDataDispatch);
		}
	};

	const watchlaterHandler = () => {
		if (isVideoInWatchLater) {
			removeFromWatchLaterService(token, item, userDataDispatch);
		} else {
			addToWatchLaterService(token, item, userDataDispatch);
		}
	};

	const navigateToSingleVideo = () => {
		navigate(`/explore/${item._id}`);
	};

	return (
		<div className='video-card-container'>
			<div className='video-thumbnail-div' onClick={navigateToSingleVideo}>
				<span className='video-duration-text'>{item.videoLength}</span>
				<img className='video-thumbnail-img' src={item.thumbnail} />
			</div>
			<div className='video-card-middle'>
				<div onClick={navigateToSingleVideo}>
					<img className='video-card-channel-img' src={item.channelImg} />
				</div>
				<div className='video-card-names' onClick={navigateToSingleVideo}>
					<div className='video-name'>{item.title}</div>
					<div className='video-channel-name'>{item.channelName}</div>
				</div>
				<div className='video-card-icons-div'>
					<div
						className={`${isVideoInLikes ? "material-icons icon-active" : "material-icons-outlined"} md-24`}
						onClick={isAuth ? () => likeHandler() : () => navigate("/login")}>
						thumb_up
					</div>
					<div
						className={`${isVideoInWatchLater ? "material-icons icon-active" : "material-icons-outlined"} md-24`}
						onClick={isAuth ? () => watchlaterHandler() : () => navigate("/login")}>
						{isVideoInWatchLater ? "bookmark_added" : "bookmark_border"}
					</div>
					<div className='material-icons md-24'>playlist_add</div>
				</div>
			</div>
		</div>
	);
};

export { VideoCard };
