import axios from "axios";

export const addToHistoryService = async (token, video, userDataDispatch) => {
	try {
		let response = await axios.post("/api/user/history", { video }, { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_HISTORY", payload: response.data.history });
		}
	} catch (err) {
		console.error(err);
	}
};
