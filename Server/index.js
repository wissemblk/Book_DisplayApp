const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5174;
const mysql = require("mysql2");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'wissem321456',
    database: 'fika',
    connectionLimit: 10
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/api/insert", (req, res) => {
    const { bookReview, Rated , createdTime,IdUser} = req.body;

    const sqlInsert = "INSERT INTO `fika`.`review` (`idReview`, `Date`, `Rate`, `idUser`, `bookReview`, `idBook`) VALUES ('0', ?, ?, ?, ?, '1');";
    db.query(sqlInsert, [createdTime, Rated,IdUser,bookReview], (err, result) => {
        if (err) {
            console.error("Error inserting review:", err);
            return res.status(500).json({ error: "Error inserting review" });
        }
        console.log("Review inserted successfully");
        res.status(200).json({ message: "Review inserted successfully" });
    });
});

app.get("/api/reviews", (req, res) => {
    const query = `
    SELECT review.*, user.User_Name
    FROM review
    JOIN user ON review.idUser = user.idUser
`;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Failed to fetch reviews:', err);
            res.sendStatus(500);
            return;
        }
        res.json(results);
    });
});

app.get("/api/bookInfos", (req, res) => {
    const selectBookData = "SELECT * FROM bookinfo";
   
    db.query(selectBookData, (err, results) => {
        if (err) {
            console.error('Failed to fetch book infos:', err);
            res.sendStatus(500);
            return;
        }
        res.json(results);
    });
});



app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
});
