const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('channels.db'); // Connect to your database

// Define the SQL statement to rename the 'location' column to 'notes'
const sql = 'ALTER TABLE channels RENAME COLUMN location TO notes';

// Execute the SQL statement
db.run(sql, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Column "location" renamed to "notes" successfully');
  }
});

// Close the database connection (assuming you're done with it)
db.close();
