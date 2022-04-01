import axios from "axios";

export const removeFromHistoryService = async (token, video, userDataDispatch) => {
	try {
		const response = await axios.delete(`/api/user/history/${video._id}`, {
			headers: {
				authorization: token,
			},
		});

		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_HISTORY", payload: response.data.history });
		}
	} catch (err) {
		console.error(err);
	}
};
