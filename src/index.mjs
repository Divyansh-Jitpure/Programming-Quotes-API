import express from "express";
import { codingQuotes } from "./codingQotes.mjs";

const app = express();

const PORT = process.env.PORT || 3000;

function getRandomNumber() {
  return Math.floor(Math.random() * 201);
}

app.get("/", (request, response) => {
  const quote = codingQuotes[getRandomNumber()].quote;
  response.send({ quote });
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
