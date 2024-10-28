import express from "express";

const app = express();
const port = 9000;

app.use("/", (req, res) => {
  res.json({ messege: "Started" });
  // res.json("Hello World");
});

app.listen(9000, () => {
  console.log("Hello World, Server Started");
});
