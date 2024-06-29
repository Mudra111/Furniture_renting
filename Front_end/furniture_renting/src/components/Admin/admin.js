import React from "react";
import "./admin.css";

export default function admin() {
	return (
		<div>
			<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
				<a className="navbar-brand ps-3" href="index.html">
					City On Tip
				</a>
			</nav>
			<div id="layoutSidenav">
				<div id="layoutSidenav_nav">
					<nav
						className="sb-sidenav accordion sb-sidenav-dark"
						id="sidenavAccordion"
					>
						<div className="sb-sidenav-menu">
							<div className="nav">
								<div className="sb-sidenav-menu-heading">Core</div>
								<a className="nav-link" href="index.html">
									<div className="sb-nav-link-icon">
										<i className="fas fa-tachometer-alt"></i>
									</div>
									Home
								</a>
							</div>
						</div>
					</nav>
				</div>

				<div id="layoutSidenav_content">
					<div className="container-fluid px-4">
						<h1 className="mt-4">Dashboard</h1>
						<ol className="breadcrumb mb-4">
							<li className="breadcrumb-item active">City on Tip</li>
						</ol>

						<table className="table">
							<thead className="thead-dark">
								<tr>
									<th scope="col">Name</th>
									<th scope="col">Email</th>
									<th scope="col">Address</th>
								</tr>
							</thead>
							<tbody id="tbodyGetUserReq"></tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
