const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const port = process.env.PORT || 5000;

const person = require('./routes/person');

dotenv.config();
app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    process.env.DATA_BASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        console.log('database Working!')
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/person', person);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})