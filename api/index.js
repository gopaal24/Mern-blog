import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Succesfully connected");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
