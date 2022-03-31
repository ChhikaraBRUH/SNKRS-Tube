import { VideoCard } from "../../../components/VideoCard/VideoCard";
import { useUserData } from "../../../context/userDataContext";

const WatchLaterListing = () => {
	const { userDataState } = useUserData();

	return userDataState.watchlater.map((video) => <VideoCard item={video} key={video._id} />);
};

export { WatchLaterListing };
