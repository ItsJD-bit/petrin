const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;


// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Static files
app.use(
    "/css",
    express.static(path.join(__dirname, "css"))
);

app.use(
    "/js",
    express.static(path.join(__dirname, "js"))
);

app.use(
    "/assets",
    express.static(path.join(__dirname, "assets"))
);


// Home
app.get("/", (req, res) => {
    res.render("index");
});


// Server
app.listen(PORT, () => {
    console.log(`Rin website running on port ${PORT}`);
});