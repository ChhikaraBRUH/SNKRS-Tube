const userDataReducer = (state, action) => {
	switch (action.type) {
		case "SET_LIKES":
			let likesData = action.payload;
			return { ...state, likes: [...likesData] };
		case "SET_WATCH_LATER":
			let watchlaterData = action.payload;
			return { ...state, watchlater: [...watchlaterData] };
		case "SET_HISTORY":
			let historyData = action.payload;
			return { ...state, history: [...historyData] };

		default:
			return state;
	}
};

export { userDataReducer };
