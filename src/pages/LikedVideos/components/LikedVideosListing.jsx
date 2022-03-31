import { VideoCard } from "../../../components/VideoCard/VideoCard";
import { useUserData } from "../../../context/userDataContext";

const LikedVideosListing = () => {
	const { userDataState } = useUserData();

	return userDataState.likes.map((video) => <VideoCard item={video} key={video._id} />);
};

export { LikedVideosListing };
