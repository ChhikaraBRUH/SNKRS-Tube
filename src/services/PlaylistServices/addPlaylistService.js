import axios from "axios";

export const addPlaylistService = async (token, playlist, userDataDispatch) => {
	try {
		const response = await axios.post("/api/user/playlists", { ...playlist }, { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_PLAYLISTS", payload: response.data.playlists });
		}
	} catch (err) {
		console.error(err);
	}
};
