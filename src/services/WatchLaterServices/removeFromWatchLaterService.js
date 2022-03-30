import axios from "axios";

export const removeFromWatchLaterService = async (token, video, userDataDispatch) => {
	try {
		const response = await axios.delete(`/api/user/watchlater/${video._id}`, { headers: { authorization: token } });

		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_WATCH_LATER", payload: response.data.watchlater });
		}
	} catch (err) {
		console.error(err);
	}
};
