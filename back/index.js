const express = require('express');
const mysql = require('mysql2');
const db = require('./app/db');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({
    origin: '*',
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 4000);
app.get('/', (req, res) => {
    res.send('Root');
});

app.post('/users', (req, res) => {

    db.query(`SELECT userId from users where userId = "${req.body.userId}" and password = "${req.body.password}"`, (error, rows) => {
        if (error) throw error;
        console.log('User info is: ', rows);
        res.send(rows);

    });
});

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});