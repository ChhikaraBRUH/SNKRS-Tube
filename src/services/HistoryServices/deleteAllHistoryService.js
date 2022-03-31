import axios from "axios";

export const deleteAllHistoryService = async (token, userDataDispatch) => {
	try {
		let response = await axios.delete("/api/user/history/all", { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_HISTORY", payload: response.data.history });
		}
	} catch (err) {
		console.error(err);
	}
};
