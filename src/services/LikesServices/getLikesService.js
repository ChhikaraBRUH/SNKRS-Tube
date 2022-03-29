import axios from "axios";

export const getLikesService = async (token, userDataDispatch) => {
	try {
		const response = await axios.get("/api/user/likes", { headers: { authorization: token } });
		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_LIKES", payload: response.data.likes });
		}
	} catch (err) {
		console.error(err);
	}
};
