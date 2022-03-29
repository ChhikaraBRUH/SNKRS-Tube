import { VideoCard } from "../../../components/VideoCard/VideoCard";
import { useVideos } from "../../../context/videosContext";

const LikedVideosListing = () => {
	const { videosState } = useVideos();
	return videosState.videos.map((video) => <VideoCard item={video} />);
};

export { LikedVideosListing };
