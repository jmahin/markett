const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
app.use(morgan('combined'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

let resName = 'Brookline Farmers Market';
let resAddress = 'Parking Lot, Centre Street West, Brookline, MA 02446';
let hoursOpen = 'Thursday 1:30-6:30';
let season = 'first Thursday in June until the last Thursday before Thanksgiving';
let resWeb = 'brooklinefarmersmarket.com';

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
