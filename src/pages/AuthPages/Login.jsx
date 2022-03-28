import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axios from "axios";

const Login = () => {
	const [user, setUser] = useState({ email: "", password: "" });
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const { setIsAuth, setToken, navigate } = useAuth();

	const loginHandler = async (e, user) => {
		e.preventDefault();
		setError(false);
		setLoading(true);

		try {
			const response = await axios.post("/api/auth/login", user);
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
			<section className='auth-section'>
				<div className='auth-container'>
					{error && <p className='text-error-color text-underline fw-700'>Error Occured. Try Again!</p>}
					<h3>Login</h3>

					<form onSubmit={(e) => loginHandler(e, user)}>
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
						<div className='remember-div'>
							<input type='checkbox' id='remember-me-input' />
							<label htmlFor='remember-me-input'>Remember Me</label>
						</div>
						<div className='forgot-pass-div'>
							<a href='#'>Forgot Password?</a>
						</div>

						<p
							className='text-center text-underline test-creds-text'
							onClick={(e) => {
								setUser({
									email: "testuser@gmail.com",
									password: "testuser",
								});
							}}>
							Fill Test Credentials
						</p>

						<div className='auth-btn-div'>
							<button type='submit' className='btn auth-btn' disabled={loading}>
								{loading ? "Logging in..." : "Log In"}
							</button>
						</div>
					</form>

					<div className='auth-alternate-link'>
						Not a member?<Link to='/signup'>Join Us</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export { Login };
