const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller')

const app = express()

app.use( bodyParser.json() );

const { CONNECTION_STRING, SERVER_PORT } = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/api/houses',controller.getHouses)
app.post('/api/house',controller.addHouse)
app.delete('/api/houses:name',controller.deleteHouse)


const port = SERVER_PORT || 4200
app.listen(port, () => { console.log(`port ${port} is a runnin'`) })