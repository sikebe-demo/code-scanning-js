const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// https://<host>/unsafe?name=<script>alert('You have been haced!!');</script>
// https://<host>/unsafe?name=%3Cscript%3Ealert(%27You%20have%20been%20haced!!%27);%3C/script%3E
app.get('/unsafe', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
