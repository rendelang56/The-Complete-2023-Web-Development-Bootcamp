import express from "express";

const app = express();
const port = 3000;



app.get("/", (req, res) => {
    const d = new Date();
    const day = d.getDay();

    let type = "a weekday";

    if (day === 0 || day === 6){
        type = "a weekend";
    }
    res.render("index.ejs", 
    {dateType: type}
    );
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });