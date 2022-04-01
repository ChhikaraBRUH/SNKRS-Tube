import axios from "axios";

export const getHistoryService = async (token, userDataDispatch) => {
	try {
		let response = await axios.get("/api/user/history", { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_HISTORY", payload: response.data.history });
		}
	} catch (err) {
		console.error(err);
	}
};
