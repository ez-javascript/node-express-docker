const express = require("express");

const PORT = 80;

// Create new Express app
const app = express();

// Add a route
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// Add port listener
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}!`);
});