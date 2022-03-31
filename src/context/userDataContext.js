import { createContext, useReducer, useEffect, useContext } from "react";
import { userDataReducer } from "../reducer/userDataReducer";
import { useAuth } from "./authContext";
import { getLikesService, getWatchLaterService, getHistoryService } from "../services";

const UserDataContext = createContext(null);

const UserDataProvider = ({ children }) => {
	const initialUserDataState = {
		likes: [],
		watchlater: [],
		history: [],
	};

	const { token, isAuth } = useAuth();

	const [userDataState, userDataDispatch] = useReducer(userDataReducer, initialUserDataState);

	useEffect(() => {
		getLikesService(token, userDataDispatch);
		getWatchLaterService(token, userDataDispatch);
		getHistoryService(token, userDataDispatch);
	}, [isAuth]);

	return <UserDataContext.Provider value={{ userDataState, userDataDispatch }}>{children}</UserDataContext.Provider>;
};

const useUserData = () => useContext(UserDataContext);

export { useUserData, UserDataProvider };
