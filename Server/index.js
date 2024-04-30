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

app.post("/api/INSERT/FAV", (req, res) => {
    const { idBook, idUser } = req.body;

    const addFav = "INSERT INTO `fika`.`favourite_book` (`Favourite_id`, `Book_id`, `User_id`) VALUES ('0', ?, ?);";
    db.query(addFav, [idBook, idUser], (err, result) => {
        if (err) {
            console.error("Error inserting favorite:", err);
            return res.status(500).json({ error: "Error inserting favorite" });
        }
        console.log("Favorite inserted successfully");
        res.status(200).json({ message: "Favorite inserted successfully" });
    });
});

app.delete("/api/DELETE/FAV", (req, res) => {
    const { idBook, idUser } = req.body;
    const removeFav = "DELETE FROM `favourite_book` WHERE `Book_id` = ? AND `User_id` = ?;";
    db.query(removeFav, [idBook, idUser], (err, result) => {
      if (err) {
        console.error("Error removing favorite:", err);
        return res.status(500).json({ error: "Error removing favorite" });
      }
      console.log("Favorite removed successfully");
      res.status(200).json({ message: "Favorite removed successfully" });
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


app.delete("/api/reviews/:idReview", (req, res) => {
    const { idReview } = req.params;
    const removeReview = "DELETE FROM `review` WHERE `idReview` = ?;";
    db.query(removeReview, [idReview], (err, result) => {
      if (err) {
        console.error("Error removing your review:", err);
        return res.status(500).json({ error: "Error removing review" });
      }
      console.log("Review removed successfully");
      res.status(200).json({ message: "Review removed successfully" });
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
