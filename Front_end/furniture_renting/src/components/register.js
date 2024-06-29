import React from "react";
import "./login.css";

export default function register() {
	return (
		<div className="mainDivReg">
			<div class="container form_style d-flex align-items-center justify-content-center">
				<form>
					<div className="d2 justify-content-center">
						<div className="d3">
							<h2>Registration</h2>
							<div className="form-group">
								<label for="inputName">Name</label>
								<input type="text" className="form-control fc" id="inputName" />
							</div>

							<div className="form-group">
								<label for="inputEmail">Email</label>
								<input
									type="email"
									className="form-control fc"
									id="inputEmail"
								/>
							</div>

							<div className="form-group">
								<label for="inputContNo">Contact No.</label>
								<input
									type="tel"
									pattern="[0-9]{10}"
									className="form-control fc"
									id="inputContNo"
								/>
							</div>

							<div className="form-group">
								<label for="inputPass">Password</label>
								<input
									type="password"
									className="form-control fc"
									id="inputPass"
								/>
							</div>

							<button id="register" class="btn btn2">
								Register
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
