import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://yodha_akkineni:yodha_akkineni@yodha-blog.tmnu5g1.mongodb.net/blog_DB",
  )
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
