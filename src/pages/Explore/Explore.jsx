import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoListing } from "./components/VideoListing";
import "./Explore.css";

const Explore = () => {
	return (
		<>
			<Sidebar />
			<div className='main-container'>
				<VideoListing />
			</div>
		</>
	);
};

export { Explore };
