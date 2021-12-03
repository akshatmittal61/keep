import React from 'react'

const Note = ({ pop, note, onCopy, onDelete }) => {
    return (
        <div className="note">
            <div className="note-head" onClick={pop}>
                <div className="note-title">
                    {note.title}
                </div>
            </div>
            <div className="note-body">
                <div className="note-content" onClick={pop}>
                    {note.content}
                </div>
                <div className="note-controls">
                    <div className="note-control" onClick={onCopy}>
                        <span className="material-icons">content_copy</span>
                    </div>
                    <div className="note-control" onClick={onDelete}>
                        <span className="material-icons">delete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note
