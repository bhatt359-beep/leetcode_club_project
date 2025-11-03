const express = require("express");
const Database = require("better-sqlite3")
const path = require("path");
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],
};
const dbPath = path.join(__dirname, "../db", "bookshelf.db");
let db;

try {
    db = new Database(dbPath, { readonly: false });
    console.log("Connected to SQLite database:", dbPath);
} catch (err) {
    console.error("Could not connect to SQLite database:", err.message);
    process.exit(1);
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/api/books", (req, res) => { //endpoint: get all books
    try {
        const rows = db.prepare(
            `SELECT id, title, filename, filetype, tags, added_on 
            FROM books
            ORDER BY added_on DESC`
        ).all();
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database query failed" });
    }
});

app.get("/api/books/:id", (req, res) => { //endpoint: get single book by id
    try {
        const row = db.prepare("SELECT * FROM books WHERE id = ?").get(req.params.id);
        if (!row) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json(row);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database query failed" });
    }
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
});