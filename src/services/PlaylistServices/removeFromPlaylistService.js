import axios from "axios";

export const removeFromPlaylistService = async (token, playlist, video, userDataDispatch) => {
	try {
		const response = await axios.delete(`/api/user/playlists/${playlist._id}/${video._id}`, { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_PLAYLIST", payload: response.data.playlist });
		}
	} catch (err) {
		console.error(err);
	}
};
