const videosReducer = (state, action) => {
	switch (action.type) {
		case "GET_DATA":
			return { ...state, videos: action.payload.videos, categories: action.payload.categories };
		case "FILTER":
			return { ...state, selectedCategory: action.payload.category };
		default: {
			return state;
		}
	}
};

export { videosReducer };
