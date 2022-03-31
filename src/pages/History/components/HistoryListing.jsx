import { HistoryListingCard } from "./HistoryListingCard";
import { useUserData } from "../../../context/userDataContext";

const HistoryListing = () => {
	const { userDataState } = useUserData();
	return userDataState.history.map((video) => <HistoryListingCard item={video} key={video._id} />);
};

export { HistoryListing };
