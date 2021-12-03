import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const app = express();
app.use(cors());
app.use(bodyParser.json());

let notes = [
    {
        "id": 0,
        "title": "Google I/O",
        "content": "Google I/O is back May 18-20, online, and free for everyone. Join us live. I/O is live keynotes, hands-on learning with Google experts, and a first look at the latest developer products. Make sure to check back for more updates!"
    },
    {
        "id": 1,
        "title": "SVG illustrations",
        "content": "Free SVGs illustrations for lot of purposes"
    },
    {
        "id": 2,
        "title": "Ian #brothersbondbourbon",
        "content": "Ian Somerhalder's video with brotherbonbourbon. I know you're obsessed with me"
    },
    {
        "id": 3,
        "title": "Klaus",
        "content": "Read the poem The Poison Apple."
    },
    {
        "id": 4,
        "title": "The Originals",
        "content": "I was never naive enough to think that I was your light, but there is light in you. All that anger, the cycle of abuse that Mikael began, you can end it. You have to, so you can be the light for your little girl. For Hope. — Cami to Klaus in No More Heartbreaks"
    },
    {
        "id": 5,
        "title": "Rise of Flutter",
        "content": "Is flutter going to kill Native Android? It already is known fact, flutter can be used for cross platform app development Meanwhile Google has came up with the solution of independence from JVMs."
    },
    {
        "id": 6,
        "title": "Ross & Rachel",
        "content": "Rachel: Do you think it's easy for me to see you with somebody else?  Ross: Hey you were the one who ended it, remember ?  Rachel: Yes because I was mad at you. Not because I stopped loving you."
    },
    {
        "id": 7,
        "title": "Random lorem ipsum for long note test",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Deserunt fugiat neque non esse minus quis ab recusandae, ratione culpa nemo veniam aperiam enim alias! Eligendi laboriosam nemo labore atque deserunt! Voluptas ipsam molestias autem modi obcaecati vel quaerat possimus ipsa ipsum eligendi! Numquam similique, dolorum hic, provident dolorem sit cum veniam pariatur iusto aspernatur sunt perferendis nisi, totam minus aperiam? Rem natus, explicabo aut nesciunt enim adipisci debitis unde.  Quasi, reiciendis provident aut, ullam neque ea obcaecati, soluta corporis error iure placeat quos? Reprehenderit harum aspernatur ullam error similique impedit! Quod quisquam quidem explicabo, porro similique cupiditate vero amet tempora dolore.  Labore voluptate quibusdam, commodi fugiat hic perferendis laboriosam, vero quis cum blanditiis ab dolor consectetur excepturi necessitatibus magnam deserunt! Distinctio iste delectus, repellat vel libero, ut sapiente pariatur tempora dolore modi sunt? Dolore asperiores quam soluta laudantium at, eligendi, quas repudiandae aliquam veritatis tempore nobis iste? Vel, odio distinctio.  Nobis ipsam qui corrupti excepturi saepe maxime labore magnam sapiente nisi reprehenderit, similique architecto corporis laudantium ipsa expedita voluptate dolorem accusamus, quasi ut nemo neque error odio.  Modi, voluptatum magnam? Repellendus earum nostrum voluptatibus optio explicabo molestias cupiditate repudiandae magnam iure tenetur asperiores sit cumque ad eum voluptates quo nemo quidem natus doloribus consequatur temporibus, tempore distinctio pariatur.  Ipsam, corrupti.  Voluptatibus voluptates quae architecto? Omnis consequatur laboriosam deleniti doloremque fugit eos, cum hic ipsam eveniet est dolore, et eaque ea debitis.  Nisi asperiores ab nostrum voluptatum eveniet mollitia a ipsum! Nulla ad at praesentium quam amet quasi voluptates iste quia laborum, aliquid totam repellat exercitationem eligendi, neque incidunt numquam! Et nobis tempora architecto doloribus neque.  Ipsum ab laboriosam illum expedita.  Dicta reprehenderit, sed dolorum nisi illo, magnam suscipit nobis autem quia officia minima ratione quod quo modi recusandae? Iste nihil quam ut unde doloremque minima laboriosam est quis, enim quisquam?"
    },
    {
        "id": 8,
        "title": "Eva",
        "content": "Isn't it funny ? The people who we despise the most,  Are the people who are most like us"
    }
];
app.get('/notes', (req, res) => {
    res.json(notes);
})
app.post('/add', (req, res) => {
    const note = req.body;
    console.log(note);
    notes = [...notes, note];
})
app.patch('/edit/:id', (req, res) => {
    let newNote = req.body;
    let id = +req.params.id;
    notes[id].title = newNote.title;
    notes[id].content = newNote.content;
    writeData(notes, "notes");
    res.json(newNote);
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