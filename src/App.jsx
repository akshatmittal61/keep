import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from "react-router-dom";
import Add from "./pages/Add";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Edit from "./pages/Edit";

const App = () => {
	const params = useParams();
	useEffect(() => {
		getNotes();
	}, []);
	const [allNotes, setAllNotes] = useState([]);
	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000",
	});
	async function getNotes() {
		await axiosInstance
			.get("/notes")
			.then((res) => {
				setAllNotes([...res.data]);
			})
			.catch((err) => console.log(err));
	}
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route
						path="/"
						element={<Home axiosInstance={axiosInstance} />}
					/>
					<Route path="/about" element={<About />} />
					<Route
						path="/add"
						element={<Add axiosInstance={axiosInstance} />}
					/>
					<Route
						path="/edit/:id"
						element={
							<Edit
								id={params.id}
								noteToEdit={allNotes[params.id]}
								axiosInstance={axiosInstance}
							/>
						}
					/>
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
		</Router>
	);
};

export default App;
