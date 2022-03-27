import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../context/authContext";
const Navbar = () => {
	const { isAuth } = useAuth();
	return (
		<>
			<nav className='nav-container'>
				<div className='left-nav'>
					<Link className='nav-heading' to={"/"}>
						SNKRS
					</Link>
					<span className='nav-subheading'>Tube</span>
				</div>

				<div className='search-div'>
					<input className='search-input' type='text' placeholder='Search items' />
					<span className='material-icons search-icon'>search</span>
				</div>

				<div className='right-nav'>
					<div className='nav-link'>
						<Link className='nav-heading' to={"/"}>
							EXPLORE
						</Link>
					</div>

					<div className='nav-link'>
						{isAuth ? (
							<Link className='nav-heading' to={"/logout"}>
								<button className='btn btn-primary-outlined login-btn'>Logout</button>
							</Link>
						) : (
							<Link className='nav-heading' to={"/login"}>
								<button className='btn btn-primary-outlined login-btn'>Login</button>
							</Link>
						)}
					</div>

					<div className='nav-link'>
						<Link className='nav-heading' to={"/"}>
							<div className='badge-div'>
								<div className='material-icons md-36'>account_circle</div>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export { Navbar };
