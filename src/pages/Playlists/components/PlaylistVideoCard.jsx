import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useUserData } from "../../../context/userDataContext";
import {
	addToLikesService,
	removeFromLikesService,
	addToWatchLaterService,
	removeFromWatchLaterService,
	addToHistoryService,
	removeFromPlaylistService,
} from "../../../services";

import { checkInPlaylist } from "../../../util/checkInPlaylist";
import "../../../components/VideoCard/VideoCard.css";

const PlaylistVideoCard = ({ item, playlist }) => {
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

	const navigateToSingleVideo = () => {
		if (isAuth && !isVideoInHistory) {
			addToHistoryService(token, item, userDataDispatch);
		}
		navigate(`/explore/${item._id}`);
	};

	const deleteFromPlaylistHandler = () => {
		if (isAuth) {
			removeFromPlaylistService(token, playlist, item, userDataDispatch);
		}
	};

	return (
		<>
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
					<div className='playlist-video-card-icons-div'>
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
						<div
							className='material-icons md-24 playlist-video-delete-btn'
							onClick={isAuth ? () => deleteFromPlaylistHandler() : () => navigate("/login")}>
							delete
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export { PlaylistVideoCard };
