import axios from "axios";

export const addToWatchLaterService = async (token, video, userDataDispatch) => {
	try {
		const response = await axios.post("/api/user/watchlater", { video }, { headers: { authorization: token } });

		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_WATCH_LATER", payload: response.data.watchlater });
		}
	} catch (err) {
		console.error(err);
	}
};
