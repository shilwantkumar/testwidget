const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { sendMessage, getMessages } = require("./cbfunction");
const app = express();
app.use(express.json());
app.use(cors());

//port
const port = 8001;

// routing
app.get("/get-messages", getMessages);
app.post("/send-message", sendMessage);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/chatbot")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Creating server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
