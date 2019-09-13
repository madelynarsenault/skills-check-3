require('dotenv').config()
const express = require("express");
const app = express();
const massive = require('massive');
const controller = require('./controller');

app.use(express.json())

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('database is connected')
})

app.get('/api/house', controller.getName)
app.post('/api/name', controller.addName)
app.delete('/api/name/:id', controller.deleteName)
app.put('/api/name/:id', controller.updateName)


app.listen(3000, () => {
    console.log("the port is listening on 3000")
})