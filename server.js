//require express,mongoose,and morgan
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// set up variable PORT
const PORT = process.env.PORT || 3000;
//assign express() to variable 'app'
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness_tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


//routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})