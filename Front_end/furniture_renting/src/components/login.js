import React from "react";
import "./login.css";

export default function login() {
	return (
		<div className="mainDivLogin">
			<div className="container d1 form_style d-flex align-items-center justify-content-center">
				<form id="loginForm" method="post" className="formLogin">
					<div className="d2 d4 justify-content-center">
						<div className="d3">
							<h2>Login Here</h2>

							<div className="form-group">
								<label for="inptEmail">Email</label>
								<input
									type="email"
									className="form-control fc"
									id="inptEmail"
								/>
							</div>

							<div className="form-group">
								<label for="inptPass">Password</label>
								<input
									type="password"
									className="form-control fc"
									id="inptPass"
								/>
							</div>

							<button className="btn btn1" id="login">
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
