import { createContext, useReducer, useEffect, useContext } from "react";
import { userDataReducer } from "../reducer/userDataReducer";
import { useAuth } from "./authContext";
import { getLikesService } from "../services/LikesServices";
import { getWatchLaterService } from "../services/WatchLaterServices";

const UserDataContext = createContext(null);

const UserDataProvider = ({ children }) => {
	const initialLikedVideosState = {
		likes: [],
		watchlater: [],
	};

	const { token, isAuth } = useAuth();

	const [userDataState, userDataDispatch] = useReducer(userDataReducer, initialLikedVideosState);

	useEffect(() => {
		getLikesService(token, userDataDispatch);
		getWatchLaterService(token, userDataDispatch);
	}, [isAuth]);

	return <UserDataContext.Provider value={{ userDataState, userDataDispatch }}>{children}</UserDataContext.Provider>;
};

const useUserData = () => useContext(UserDataContext);

export { useUserData, UserDataProvider };
