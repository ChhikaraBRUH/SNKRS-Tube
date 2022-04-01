import axios from "axios";

export const getAllPlaylistsService = async (token, userDataDispatch) => {
	try {
		const response = await axios.get("/api/user/playlists", { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_PLAYLISTS", payload: response.data.playlists });
		}
	} catch (err) {
		console.errror(err);
	}
};
