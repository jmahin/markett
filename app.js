
const express = require('express');
const morgan = require('morgan');
// const methodOverride = require('method-override');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
// method override
// app.use(methodOverride('_method'));

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

// app.get('/admin', (request, response) => {
//     response.render('pages/admin');
// });
// app.get('/contact', (request, response) => {
//     response.render('pages/contact');
// });
// app.get('/login', (request, response) => {
//     response.render('pages/login');
// });
