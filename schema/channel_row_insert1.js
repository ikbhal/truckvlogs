// Assuming you have already connected to the SQLite database
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('channels.db');

// Define the channel information
const channelInfo = {
  name: 'Mana truck vlogs',
  channel_name: 'Mana truck vlogs',
  channel_link: 'https://www.youtube.com/@manatruckvlogs1',
  country: 'India',
  state: 'Andhra Pradesh',
  language: 'Telugu',
  location: 'Some Location' // You can specify the actual location
};

// SQL statement to insert the new channel row
const sql = `
  INSERT INTO channels (name, channel_name, channel_link, country, state, language, location)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`;

// Execute the SQL statement with the provided values
db.run(
  sql,
  [
    channelInfo.name,
    channelInfo.channel_name,
    channelInfo.channel_link,
    channelInfo.country,
    channelInfo.state,
    channelInfo.language,
    channelInfo.location
  ],
  function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log('New channel row inserted successfully');
    }
  }
);

// Close the database connection (assuming you're done with it)
db.close();
