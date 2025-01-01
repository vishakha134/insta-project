const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require("mongoose")
const mongoUrl = require("./keys.js")

mongoose.connect(mongoUrl);

mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo");
})

mongoose.connection.on("error", (err) => {
    console.log("not connected to mongodb", err);
});

app.listen(PORT, () => {
    console.log("server is running on port" + " " + PORT);
})
