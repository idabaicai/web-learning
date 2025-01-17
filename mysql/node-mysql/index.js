// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'web',
});

// A simple SELECT query
try {
  const [results, fields] = await connection.query(
    'SELECT * FROM users'
  );

  console.log(results); // results contains rows returned by server
  console.log(fields); // results contains rows returned by server
} catch (err) {
  console.log(err);
}