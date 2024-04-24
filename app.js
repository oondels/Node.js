const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

// register
app.set("view engine", "ejs");
// listen for requests
app.listen(3000);

// 3rd party Middleware to show information about request
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const people = [];
  res.render("index", { title: "Home", people });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", { title: "Cadastro" });
});

// 404 error
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
