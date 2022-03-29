import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { videosReducer } from "../reducer/videosReducer";

const VideosContext = createContext(null);

const VideosProvider = ({ children }) => {
	const initialVideosState = {
		videos: [],
		categories: [],
		selectedCategory: "",
	};

	const [videosState, videosDispatch] = useReducer(videosReducer, initialVideosState);

	useEffect(() => {
		(async () => {
			try {
				const responseVideos = await axios.get("/api/videos");
				const responseCategories = await axios.get("/api/categories");
				if (responseVideos.status == 200) {
					let videos = responseVideos.data.videos;
					let categories = responseCategories.data.categories;

					videosDispatch({ type: "GET_DATA", payload: { videos, categories } });
				}
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return <VideosContext.Provider value={{ videosState, videosDispatch }}>{children}</VideosContext.Provider>;
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
