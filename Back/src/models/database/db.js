const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./src/models/database/dataBase.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      author TEXT,
      linkImg TEXT,
      description TEXT,
      state TEXT,
      city TEXT,
      address TEXT,
      linkMoreDetails TEXT,
      type TEXT,
      category TEXT
    );
  `);
});

module.exports = db;
