// app.js
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const db = new sqlite3.Database('schema/channels.db');
app.use(bodyParser.urlencoded({ extended: true }));

// Set up middleware, routes, and templates here.
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Create a GET route for the /admin page
app.get('/admin', (req, res) => {
    // Fetch data from the 'channels' table in the database
    db.all('SELECT * FROM channels', (err, channels) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Internal Server Error');
        }

        // Render the admin page and pass the fetched channels data
        res.render('admin.ejs', { channels });
    });
});

app.post('/admin', (req, res) => {
    const { channel_name, channel_link, country, state, language, notes } = req.body;

    // Insert the submitted data into the 'channels' table
    const sql = `
      INSERT INTO channels (channel_name, channel_link, country, state, language, notes)
      VALUES ( ?, ?, ?, ?, ?, ?)
    `;
    const values = [channel_name, channel_link, country, state, language, notes];

    db.run(sql, values, (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Internal Server Error');
        }

        // Redirect back to the /admin page after adding the channel
        res.redirect('/admin');
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
