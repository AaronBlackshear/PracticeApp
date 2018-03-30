require('dotenv').config();
const axios = require('axios');
const massive = require('massive');
const express = require('express');
const app = express();
const {json} = require('body-parser');
const cors = require('cors');
const ctrl = require('./controllers/people_controller');
const port = process.env.port || 3001;

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(console.log);

app.get('/api/people', ctrl.getPeople);
app.post('/api/people', ctrl.addName);
app.put('/api/people/:id', ctrl.changeName);

app.listen(port, () => `Listening on port ${port}`);