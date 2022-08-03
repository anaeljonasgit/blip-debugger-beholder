const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const env = require('./env');

const app = express();
app.use(cors());
app.use('/assets', express.static(__dirname+'/assets'));
app.set('view engine', 'ejs');
app.set('views', __dirname+'/pages');

app.get('/', (req, res) => {
    res.render('debugger');
});

app.get('/help', (req, res) => {
    res.render('help');
});

app.use((req, res, next) => {
    res.redirect('/');
});

app.listen(env.server.port, () => {
    console.log({ server: 'Server online' });
});