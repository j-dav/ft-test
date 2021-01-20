/* eslint-disable no-console */
require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const fetchHeadlines = require("./utils/search");

const app = express();
const port = process.env.PORT || 3000;

// view engine setup
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main.hbs",
    extname: ".hbs",
  }),
);
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search", async (req, res) => {
  const query = req.query.title;
  const results = await fetchHeadlines(query);
  res.render("search", { results });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  if (process.env.NODE_ENV !== "test") {
    console.log(`FT app listening on port ${port}!`);
  }
});

module.exports = app;
