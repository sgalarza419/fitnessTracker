const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 6000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoss.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", { useNewUrlParser: true, useFindAndModify: false});


//routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})