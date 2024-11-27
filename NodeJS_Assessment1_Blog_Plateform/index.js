const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let blogs = []; 

app.get("/", (req, res) => {
    res.render("home", { blogs });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/blog", (req, res) => {
    res.render("blog");
});

app.post("/blog", (req, res) => {
    const { title, content } = req.body;
    blogs.push({ title, content });
    res.redirect("/");
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});
