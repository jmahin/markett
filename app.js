
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`The local host URL is http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    response.render('pages/index')
})

// app.get('/', (request, response) => {
//     response.render('pages/index'), {

//     }
// });


// Pages
app.get('/admin', (request, response) => {
    response.render('pages/admin');
});
app.get('/about', (request, response) => {
    response.render('pages/about');
});
app.get('/contact', (request, response) => {
    response.render('pages/contact');
});
app.get('/login', (request, response) => {
    response.render('pages/login');
});
app.get('/formsubmitted', (request, response) => {
    response.render('pages/formsubmitted');
});
app.get('/addaresource', (request, response) => {
    response.render('pages/addaresource');
});
app.get('/resadded', (request, response) => {
    response.render('pages/resadded');
});

// Contact form
app.post("/formsubmitted", function(request, response){
    response.send("The form has been submitted.");
    response.render('pages/formsubmitted');
});