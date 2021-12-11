import React from "react";

const Note = ({ pop, note, onCopy, onEdit, onDelete }) => {
	return (
		<div className="note" style={{ backgroundColor: note.color }}>
			<div className="note-head" onClick={pop}>
				<div className="note-title">{note.title}</div>
			</div>
			<div className="note-body">
				<div className="note-content" onClick={pop}>
					{note.content}
				</div>
				<div className="note-controls">
					<div className="note-control" onClick={onCopy}>
						<span className="material-icons">content_copy</span>
					</div>
					<div className="note-control" onClick={onEdit}>
						<span className="material-icons">edit</span>
					</div>
					<div className="note-control" onClick={onDelete}>
						<span className="material-icons">delete</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Note;
