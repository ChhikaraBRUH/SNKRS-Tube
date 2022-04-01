import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<aside>
			<Link to={"/"}>
				<div className='badge-div'>
					<div className='material-icons md-36'>home</div>
					<div className='sidebar-menu-title'>Home</div>
				</div>
			</Link>
			<Link to={"/explore"}>
				<div className='badge-div'>
					<div className='material-icons md-36'>explore</div>
					<div className='sidebar-menu-title'>Explore</div>
				</div>
			</Link>
			<Link to={"/playlists"}>
				<div className='badge-div'>
					<div className='material-icons md-36'>playlist_play</div>
					<div className='sidebar-menu-title'>Playlists</div>
				</div>
			</Link>
			<Link to={"/liked"}>
				<div className='badge-div'>
					<div className='material-icons md-36'>thumb_up</div>
					<div className='sidebar-menu-title'>Liked</div>
				</div>
			</Link>
			<Link to={"/watchlater"}>
				<div className='badge-div'>
					<div className='material-icons md-36'>bookmark</div>
					<div className='sidebar-menu-title'>Watch Later</div>
				</div>
			</Link>
			<Link to={"/history"}>
				<div className='badge-div'>
					<div className='material-icons md-36'>history</div>
					<div className='sidebar-menu-title'>History</div>
				</div>
			</Link>
		</aside>
	);
};

export { Sidebar };
