import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) =>{
    res.send("someRandomEmail@email.com");
});

app.get("/about", (req, res) =>{
    res.send("<h1>About me</h1><p>Trying to learn programming to eventually get a job.</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});