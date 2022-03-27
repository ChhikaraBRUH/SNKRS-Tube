import React, { useState } from "react";
import "./Auth.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axios from "axios";

const Signup = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const { setIsAuth, setToken, navigate } = useAuth();

	const signupHandler = async (e, user) => {
		e.preventDefault();
		setError(false);
		setLoading(true);

		try {
			const response = await axios.post("/api/auth/signup", user);
			localStorage.setItem("isAuth", true);
			localStorage.setItem("token", response.data.encodedToken);
			setToken(response.data.encodedToken);
			setIsAuth(true);
			setLoading(false);
			navigate("/");
		} catch (err) {
			console.error("error", err);
			setError(true);
			setLoading(false);
		}
	};

	return (
		<>
			<Navbar />

			<section className='auth-section'>
				<div className='auth-container'>
					{error && <p className='text-error-color text-underline fw-700'>Error Occured. Try Again!</p>}
					<h3>Sign Up</h3>

					<form onSubmit={(e) => signupHandler(e, user)}>
						<div className='input-container'>
							<label className='input-label'>Name*</label>
							<input
								className='input-field'
								type='text'
								required
								value={user.name}
								onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
							/>
						</div>
						<div className='input-container'>
							<label className='input-label'>Email Address*</label>
							<input
								className='input-field'
								type='email'
								required
								value={user.email}
								onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
							/>
						</div>
						<div className='input-container'>
							<label className='input-label'>Password*</label>
							<input
								className='input-field'
								type='password'
								required
								value={user.password}
								onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
							/>
						</div>
						<div className='auth-btn-div'>
							<button type='submit' className='btn auth-btn' disabled={loading}>
								{loading ? "Signing You Up..." : "Sign Up"}
							</button>
						</div>
					</form>

					<div className='auth-alternate-link'>
						Already a member?<Link to='/login'>Log In</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export { Signup };
