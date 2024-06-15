const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const admin = require("firebase-admin");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Initialize Firebase Admin SDK with environment variable
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get("/:products", (req, res) => {
  res.sendFile(path.join(__dirname, "page.html"));
});

app.use((req, res) => {
  res.status(404).send("404 - File not found");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
