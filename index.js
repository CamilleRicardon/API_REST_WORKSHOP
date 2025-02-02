const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: 'localhost',
  user: 'todo_user',
  password: 'secret',
  database: 'todo_db',
  port: 3306
});

db.getConnection((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL !');
});

/* ROUTES CRUD */

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
