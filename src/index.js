const express = require('express');
const app = express();
const db = require('./configs/database');
require("dotenv").config();

app.get('/', async (req, res) => {
  try {
    const dbName = process.env.DB_DATABASE;
    await db.raw(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    console.log(`Database ${dbName} created successfully`);
    await db.raw(`USE \`${dbName}\``);
    res.send('Database created successfully');
  } catch (error) {
    console.error(error);
    res.send('Error creating database');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});