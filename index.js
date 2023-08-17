import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var today = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var workData= {
    items:[],
    h1:"Work List",
    originalUrl:"/work"
};
var dayData= {
  items:[],
  h1:today.toLocaleDateString(undefined, options),
  originalUrl:"/"
};
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",dayData);
});

app.get("/work", (req, res) => {
    res.render("index.ejs",workData);
});
app.post("/submit", (req, res) => {
  console.log(req.body)
  if (req.body.originUrl == '/work') {
      workData.items.push(req.body.newItem);
      res.render("index.ejs",workData)
  } else {
      dayData.items.push(req.body.newItem);
      res.render("index.ejs",dayData)
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

