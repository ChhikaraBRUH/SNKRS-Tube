import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useUserData } from "../../../context/userDataContext";
import {
	addToLikesService,
	removeFromLikesService,
	addToWatchLaterService,
	removeFromWatchLaterService,
	addToHistoryService,
	removeFromHistoryService,
} from "../../../services";
import { checkInPlaylist } from "../../../util/checkInPlaylist";
import "../History.css";

const HistoryListingCard = ({ item }) => {
	const { isAuth, token } = useAuth();
	const { userDataState, userDataDispatch } = useUserData();
	const navigate = useNavigate();
	const isVideoInLikes = checkInPlaylist(item, userDataState?.likes);
	const isVideoInWatchLater = checkInPlaylist(item, userDataState?.watchlater);
	const isVideoInHistory = checkInPlaylist(item, userDataState?.history);

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

	const removeFromHistoryHandler = () => {
		if (isVideoInHistory) {
			removeFromHistoryService(token, item, userDataDispatch);
		}
	};

	const navigateToSingleVideo = () => {
		if (isAuth && !isVideoInHistory) {
			addToHistoryService(token, item, userDataDispatch);
		}
		navigate(`/explore/${item._id}`);
	};

	return (
		<div className='history-card-container'>
			<div className='history-thumbnail-div' onClick={navigateToSingleVideo}>
				<img className='history-thumbnail-img' src={item.thumbnail} />
				<span className='history-duration-text'>{item.videoLength}</span>
			</div>
			<div className='history-card-middle'>
				<div className='history-card-names' onClick={navigateToSingleVideo}>
					<div className='history-name'>{item.title}</div>
				</div>
				<div className='history-channel-div' onClick={navigateToSingleVideo}>
					<img className='history-card-channel-img' src={item.channelImg} />
					<div className='history-channel-name'>{item.channelName}</div>
				</div>
				<div className='history-card-icons-div'>
					<div
						className={`${isVideoInLikes ? "material-icons icon-active" : "material-icons-outlined"}`}
						onClick={isAuth ? () => likeHandler() : () => navigate("/login")}>
						thumb_up
					</div>
					<div
						className={`${isVideoInWatchLater ? "material-icons icon-active" : "material-icons-outlined"}`}
						onClick={isAuth ? () => watchlaterHandler() : () => navigate("/login")}>
						{isVideoInWatchLater ? "bookmark_added" : "bookmark_border"}
					</div>
					<button className='btn btn-primary-outlined history-delete-btn' onClick={removeFromHistoryHandler}>
						<div className='material-icons history-delete-icon'>delete</div>Remove from history
					</button>
				</div>
			</div>
		</div>
	);
};

export { HistoryListingCard };
