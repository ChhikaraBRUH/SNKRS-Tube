const userDataReducer = (state, action) => {
	switch (action.type) {
		case "SET_LIKES":
			return { ...state, likes: action.payload };
		case "SET_WATCH_LATER":
			return { ...state, watchlater: action.payload };

		default:
			return state;
	}
};

export { userDataReducer };
