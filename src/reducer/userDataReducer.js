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

		case "SET_PLAYLISTS":
			let playlistsData = action.payload;
			return { ...state, playlists: [...playlistsData] };

		case "SET_PLAYLIST":
			let playlistData = action.payload;
			const newPlaylists = state.playlists.map((currentPlaylist) =>
				currentPlaylist?._id === playlistData?._id ? playlistData : currentPlaylist
			);
			return { ...state, playlists: newPlaylists };

		default:
			return state;
	}
};

export { userDataReducer };
