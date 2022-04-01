import axios from "axios";

export const removePlaylistService = async (token, playlist, userDataDispatch) => {
	try {
		const response = await axios.delete(`/api/user/playlists/${playlist._id}`, { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_PLAYLISTS", payload: response.data.playlists });
		}
	} catch (err) {
		console.error(err);
	}
};
