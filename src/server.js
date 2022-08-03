const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const env = require('./env');

const app = express();
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', __dirname+'/pages');

app.get('/', (req, res) => {
    res.render('debugger');
});

app.use((req, res, next) => {
    res.redirect('/');
});

app.listen(env.server.port, () => {
    console.log({ server: 'Server online' });
});