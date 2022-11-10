// console.log('mai aag se jalta nahi');

// const superheroes = require("superheroes");

// superheroes.all;

// console.log(superheroes.random());

// function add1(a, b) {
//   return a + b;
// }

// const add2 = (a, b) => {
//   return a + b;
// };

// const sub = (a, b) => {
//   return a - b;
// };

// const obj = {
//   addition: add1,
//   subtract: sub,
// };

// console.log(obj.subtract(10, 7));

// let a = "abc";
// var b = "def";

const bodyParser = require("body-parser");
const express = require("express");
const port = 5000;
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const allTasks = [
  {
    id: 1,
    task: "Code Ex",
  },
  {
    id: 2,
    task: "Sleep",
  },
];

app.get("/tasks", (req, res) => {
  return res.json(allTasks);
});

app.post("/tasks", (req, res) => {
  const body = req.body;
  let random = Math.floor(Math.random() * 1000);
  body["id"] = random;

  allTasks.push(body);
  return res.json(body);
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  return res.json(allTasks.filter((el) => el.id != id));
});

app.listen(port, () => {
  console.log("server listening on port " + port);
});
