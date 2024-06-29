import React from "react";
import "./login.css";

export default function register() {
	return (
		<div className="mainDivLogin">
			<div class="container form_style d-flex align-items-center justify-content-center">
				<form>
					<div className="d2 justify-content-center">
						<div className="d3">
							<h2>Registration</h2>
							<div className="form-group">
								<label for="inputEmail4">Name</label>
								<input
									type="text"
									className="form-control fc"
									id="inputName4"
								/>
							</div>

							<div className="form-group">
								<label for="inputEmail4">Email</label>
								<input
									type="email"
									className="form-control fc"
									id="inputEmail4"
								/>
							</div>

							<div className="form-group">
								<label for="inputPassword4">Password</label>
								<input
									type="password"
									className="form-control fc"
									id="inputPassword4"
								/>
							</div>

							<button id="register" class="btn btn1">
								Send Register Request
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
