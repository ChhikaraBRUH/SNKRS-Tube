import axios from "axios";

export const removeFromLikesService = async (token, video, userDataDispatch) => {
	try {
		const response = await axios.delete(`/api/user/likes/${video._id}`, { headers: { authorization: token } });

		if (response.status === 200 || 200) {
			userDataDispatch({ type: "SET_LIKES", payload: response.data.likes });
		}
	} catch (err) {
		console.error(err);
	}
};
