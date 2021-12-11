import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const Edit = ({
	noteToEdit = { title: "", content: "", color: "" },
	axiosInstance,
}) => {
	useEffect(() => {
		getNotes();
	}, []);
	const { id } = useParams();
	const navigate = useNavigate();
	const [allNotes, setAllNotes] = useState([
		{
			title: "",
			content: "",
			color: "",
		},
	]);
	const [note, setNote] = useState({
		title: noteToEdit.title,
		content: noteToEdit.content,
		color: noteToEdit.color,
	});
	async function getNotes() {
		await axiosInstance
			.get("/notes")
			.then((res) => {
				setAllNotes([...res.data]);
				setNote({
					...res.data[id],
				});
			})
			.catch((err) => console.log(err));
	}
	console.log(id);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNote({
			...note,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		let newNote = {
			id: id,
			...note,
		};
		e.preventDefault();
		const condition = newNote.title === "" && newNote.content === "";
		if (!condition) {
			axiosInstance
				.patch(`/edit/${id}`, newNote)
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
			navigate("/");
		}
	};
	return (
		<section className="edit">
			<div className="edit-container">
				<form className="edit-form" onSubmit={handleSubmit}>
					<input
						value={note.title}
						onChange={handleChange}
						name="title"
						className="edit-form__input"
						type="text"
						placeholder="Title"
					/>
					<textarea
						value={note.content}
						onChange={handleChange}
						name="content"
						className="edit-form__input"
						type="text"
						placeholder="Content"
						rows="10"
					></textarea>
					<input
						value={note.color}
						onChange={handleChange}
						name="color"
						className="edit-form__input"
						type="color"
						placeholder="Color"
					/>
					<Button text="Save Note" type="submit" />
				</form>
			</div>
		</section>
	);
};

export default Edit;
