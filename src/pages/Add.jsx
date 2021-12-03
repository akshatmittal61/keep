import React, { useState, useEffect } from 'react'
import Button from '../components/Button'

const Add = ({ axiosInstance }) => {
    useEffect(() => {
        getNotes();
    }, []);
    const [allNotes, setAllNotes] = useState([]);
    async function getNotes() {
        await axiosInstance.get('/notes')
            .then((res) => {
                setAllNotes([...res.data]);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }
    const [note, setNote] = useState({
        title: '',
        content: '',
        color: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({
            ...note,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        let newNote = {
            id: allNotes.length,
            ...note
        }
        e.preventDefault();
        const condition = newNote.title === "" && newNote.content === "";
        if (!condition) {
            axiosInstance.post('/add', newNote)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
            getNotes();
        }
    }
    return (
        <section className="add">
            <div className="add-container">
                <form className="add-form" onSubmit={handleSubmit}>
                    <input
                        value={note.title}
                        onChange={handleChange}
                        name="title"
                        className="add-form__input"
                        type="text"
                        placeholder="Title"
                    />
                    <textarea
                        value={note.content}
                        onChange={handleChange}
                        name="content"
                        className="add-form__input"
                        type="text"
                        placeholder="Content"
                        rows="10"
                    ></textarea>
                    <input
                        value={note.color}
                        onChange={handleChange}
                        name="color"
                        className="add-form__input"
                        type="color"
                        placeholder="Color"
                    />
                    <Button text="Add Note" type="submit" />
                </form>
            </div>
        </section>
    )
}

export default Add
