const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('channels.db'); // Connect to your database

// Define the SQL statement to drop the 'name' column
const sql = 'ALTER TABLE channels DROP COLUMN name';

// Execute the SQL statement
db.run(sql, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Column "name" dropped successfully');
  }
});

// Close the database connection (assuming you're done with it)
db.close();





