const checkInPlaylist = (video, playlist) => {
	return playlist.find((item) => item._id === video._id);
};

export { checkInPlaylist };
