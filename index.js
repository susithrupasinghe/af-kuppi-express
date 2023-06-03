const express = require("express");
const bodyParser = require("body-parser");

const studentRouter = require("./routes/students.router");


const app = express();
const port = 3000;


// middelwares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/students", studentRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
