import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoListing } from "./components/VideoListing";
import "./Explore.css";

const Explore = () => {
	return (
		<>
			<div className='main-container'>
				<Sidebar />
				<VideoListing />
			</div>
		</>
	);
};

export { Explore };
