const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
app.use(morgan('combined'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('pages/index'), {

    }
});

app.get('/admin', (request, response) => {
    response.render('pages/admin');
});
app.get('/contact', (request, response) => {
    response.render('pages/contact');
});
app.get('/login', (request, response) => {
    response.render('pages/login');
});
