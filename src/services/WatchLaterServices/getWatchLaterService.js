import axios from "axios";

export const getWatchLaterService = async (token, userDataDispatch) => {
	try {
		const response = await axios.get("/api/user/watchlater", { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_WATCH_LATER", payload: response.data.watchlater });
		}
	} catch (err) {
		console.error(err);
	}
};
