import axios from "axios";

export const addToPlaylistService = async (token, playlist, video, userDataDispatch) => {
	try {
		const response = await axios.post(`/api/user/playlists/${playlist._id}`, { video }, { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_PLAYLIST", payload: response.data.playlist });
		}
	} catch (err) {
		console.error(err);
	}
};
