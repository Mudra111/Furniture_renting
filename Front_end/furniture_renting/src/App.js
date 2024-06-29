import logo from "./logo.svg";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/register" element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
