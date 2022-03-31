import { VideoCard } from "../../../components/VideoCard/VideoCard";
import { useUserData } from "../../../context/userDataContext";

const HistoryListing = () => {
	const { userDataState } = useUserData();
	return userDataState.history.map((video) => <VideoCard item={video} key={video._id} />);
};

export { HistoryListing };
