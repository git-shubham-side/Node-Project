const { text } = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("server started successfully");
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const quotes = [
  { text: "Believe in yourself.", author: "Anonymous" },
  { text: "Push your limits.", author: "Anonymous" },
  { text: "Stay positive, work hard.", author: "Anonymous" },
  { text: "Never stop learning.", author: "Anonymous" },
  { text: "Success is no accident.", author: "Anonymous" },
];

app.get("/quotes", (req, res) => {
  let idx = Math.floor(Math.random() * 5) + 1;
  let quote = quotes[idx];
  let qt = quote.text;
  let auth = quote.author;

  res.render("quotes.ejs", { qt, auth });
});
