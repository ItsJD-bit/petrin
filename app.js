const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;


// =====================================================
// EJS CONFIGURATION
// =====================================================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// =====================================================
// STATIC FILES
// =====================================================

// CSS
app.use(
    "/css",
    express.static(
        path.join(__dirname, "css")
    )
);

// JavaScript
app.use(
    "/js",
    express.static(
        path.join(__dirname, "js")
    )
);

// Images, audio and videos
app.use(
    "/assets",
    express.static(
        path.join(__dirname, "assets")
    )
);


// =====================================================
// HOME PAGE
// =====================================================

app.get("/", (req, res) => {

    res.render("index");

});


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {

    console.log(
        `Rin website running at http://localhost:${PORT}`
    );

});