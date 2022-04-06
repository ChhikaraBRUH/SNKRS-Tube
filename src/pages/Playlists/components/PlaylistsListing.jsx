import { PlaylistsListingCard } from "./PlaylistsListingCard";
import { useUserData } from "../../../context/userDataContext";

const PlaylistsListing = () => {
	const { userDataState } = useUserData();
	return userDataState.playlists.map((item) => <PlaylistsListingCard item={item} key={item?._id} />);
};

export { PlaylistsListing };
