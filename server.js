import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const app = express();
app.use(cors());
app.use(bodyParser.json());

let notes = [];
app.get('/notes', (req, res) => {
    res.json(notes);
})
app.post('/add', (req, res) => {
    const note = req.body;
    console.log(note);
    notes = [...notes, note];
})
app.delete('/delete/:id', (req, res) => {
    let id = +req.params.id;
    let newArray = [];
    newArray = notes.filter((note, index) => index !== id);
    newArray.map((note, index) => {
        note.id = index;
    })
    notes = [...newArray];
    res.json(notes);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));