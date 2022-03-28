import { VideoCard } from "../../../components/VideoCard/VideoCard";
import { useVideos } from "../../../context/videosContext";

const VideoListing = () => {
	const { videosState, videosDispatch } = useVideos();

	const filteredVideos = videosState.selectedCategory
		? videosState.videos.filter((item) => item.category === videosState.selectedCategory)
		: videosState.videos;

	return (
		<section className='videos-listing-section'>
			<div className='video-listing-categories'>
				<span
					className={`video-categories-chips ${videosState.selectedCategory === "" ? "video-categories-chip-active" : ""}`}
					onClick={() => videosDispatch({ type: "FILTER", payload: { category: "" } })}>
					ALL
				</span>
				{videosState.categories.map((category) => {
					return (
						<span
							className={`video-categories-chips ${
								videosState.selectedCategory === category.categoryName ? "video-categories-chip-active" : ""
							}`}
							onClick={() => videosDispatch({ type: "FILTER", payload: { category: category.categoryName } })}>
							{category.categoryName}
						</span>
					);
				})}
			</div>
			<div className='video-listing-cards'>
				{filteredVideos.map((video) => {
					return <VideoCard item={video} />;
				})}
			</div>
		</section>
	);
};

export { VideoListing };
