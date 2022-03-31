import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../context/authContext";
import { useUserData } from "../../context/userDataContext";
import { HistoryListing } from "./components/HistoryListing";
import { deleteAllHistoryService } from "../../services";

import "./History.css";

const History = () => {
	const { token } = useAuth;
	const { userDataState, userDataDispatch } = useUserData();

	const deleteAllHistory = () => {
		deleteAllHistoryService(token, userDataDispatch);
		console.log(userDataState.history);
	};

	return (
		<>
			<Sidebar />
			<div className='main-container'>
				<div className='history-page-container'>
					{userDataState.history.length > 0 ? (
						<>
							<div className='history-top'>
								<h2>Your History</h2>
								<button className='btn btn-primary' onClick={deleteAllHistory}>
									DELETE ALL HISTORY
								</button>
							</div>

							<div className='history-listing'>
								<HistoryListing />
							</div>
						</>
					) : (
						<div className='no-history-videos-text'>
							<h2>No History To Show!</h2>
							<Link to={"/explore"}>Go to explore page and watch some videos first.</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export { History };
