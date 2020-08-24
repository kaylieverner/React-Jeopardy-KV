const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactjeopardy"
);

const playerSeed = [
  {
    player: "Player One",
    score: 100,
    date: new Date(Date.now())
  },
  {
    player: "Player Two",
    score: 200,
    date: new Date(Date.now())
  }
];

db.Score
  .remove({})
  .then(() => db.Score.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
