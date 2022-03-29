import "./VideoCard.css";

const VideoCard = ({ item }) => {
	return (
		<div className='video-card-container'>
			<div className='video-thumbnail-div'>
				<span className='video-duration-text'>{item.videoLength}</span>
				<img className='video-thumbnail-img' src={item.thumbnail} />
			</div>
			<div className='video-card-middle'>
				<div className='video-card-channel-img-div'>
					<img className='video-card-channel-img' src={item.channelImg} />
				</div>
				<div className='video-card-names'>
					<div className='video-name'>{item.title}</div>
					<div className='video-channel-name'>{item.channelName}</div>
				</div>
				<div className='video-card-icons-div'>
					<div className='material-icons md-24'>thumb_up</div>
					<div className='material-icons md-24'>bookmark</div>
					<div className='material-icons md-24'>playlist_add</div>
				</div>
			</div>
		</div>
	);
};

export { VideoCard };
