import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Logout = () => {
	const { setIsAuth, setToken, isAuth, token } = useAuth();

	localStorage.removeItem("token");
	localStorage.removeItem("isAuth");
	setToken(null);
	setIsAuth(false);

	return (
		<>
			<section className='auth-section'>
				<div className='auth-container'>
					<h3>You've Been Logged Out!</h3>

					<div className='auth-alternate-link'>
						Not a member?<Link to='/signup'>Join Us</Link>
					</div>

					<div className='auth-alternate-link'>
						Already a member?<Link to='/login'>Log In</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export { Logout };
