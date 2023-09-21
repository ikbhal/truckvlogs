// In your app.js file or a separate database setup file

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('channels.db');

// Create or modify the 'channels' table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS channels (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      channel_name TEXT NOT NULL,
      channel_link TEXT NOT NULL,
      country TEXT,
      language TEXT,
      state TEXT DEFAULT '',  -- Add state column with a default empty value
      location TEXT
    )
  `);
  console.log(
    `Successfully created or modified the channels table in channels.db`
  );
});

// Close the database when the Node.js process exits
process.on('exit', () => {
  db.close();
});

// Export the database instance for use in other parts of your application
module.exports = db;
