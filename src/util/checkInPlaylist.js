const checkInPlaylist = (video, playlist) => {
	return playlist.find((item) => item.id === video.id);
};

export { checkInPlaylist };
