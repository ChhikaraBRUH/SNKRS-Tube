import axios from "axios";

export const getPlaylistService = async (token, playlist, userDataDispatch) => {
	try {
		const response = await axios.get(`/api/user/playlists/${playlist._id}`, { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_PLAYLIST", payload: response.data.playlist });
		}
	} catch (err) {
		console.error(err);
	}
};
