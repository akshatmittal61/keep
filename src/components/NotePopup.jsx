import React from 'react'

const NotePopup = ({ close, note, onCopy, onDelete }) => {
    return (
        <div className="note-popup">
            <div className="note-popup-box">
                <div className="note-popup-head">
                    <div className="note-popup-title">
                        {note.title}
                    </div>
                    <div className="note-popup-close" onClick={close}>
                        <span className="material-icons">close</span>
                    </div>
                </div>
                <div className="note-popup-body">
                    <div className="note-popup-content">
                        {note.content}
                    </div>
                    <div className="note-popup-controls">
                        <div className="note-popup-control" onClick={onCopy}>
                            <span className="material-icons">content_copy</span>
                        </div>
                        <div className="note-popup-control" onClick={onDelete}>
                            <span className="material-icons">delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotePopup
