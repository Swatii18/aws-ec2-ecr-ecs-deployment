const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// signup page
app.get('/', (req, res) => {
    res.render('index');
});

// form submit
app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post(
            `${process.env.BACKEND_URL}/submit`,
            req.body
        );

        res.send('Data submitted successfully');

    } catch (error) {
        console.error('Backend error:', error.message);
        res.status(500).send('Failed to submit the data. Please try again.');
    }
});

// Starting Express server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend running on port ${PORT}`);
});