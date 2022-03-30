import axios from "axios";

export const addToLikesService = async (token, video, userDataDispatch) => {
	try {
		const response = await axios.post("/api/user/likes", { video }, { headers: { authorization: token } });

		if (response.status === 200 || 201) {
			userDataDispatch({ type: "SET_LIKES", payload: response.data.likes });
		}
	} catch (err) {
		console.error(err);
	}
};
