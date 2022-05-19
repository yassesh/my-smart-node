
const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'shabana', email: 'ref@gamil.com', phone: '017888888' },
    { id: 2, name: 'bhabana', email: 'fdfyty@gamil.com', phone: '017888887' },
    { id: 3, name: 'lhabana', email: 'fggf@gamil.com', phone: '017888856588' },
    { id: 4, name: 'ghabana', email: 'fhf@gamil.com', phone: '017888886568' },
    { id: 5, name: 'dalhna', email: 'refhg@gamil.com', phone: '0178888886' },
    { id: 6, name: 'fhabana', email: 'reffgf@gamil.com', phone: '017888878788' },
]

app.get('/', (req, res) => {
    res.send('Welcome yass')
})
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users)
    }
})
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
