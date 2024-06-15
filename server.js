const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const admin = require("firebase-admin"); // Import Firebase Admin SDK

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json"); // Replace with your actual path
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://innovativeitsystemsnew.firebaseio.com", // Replace with your Firebase database URL
});

let initialPath = path.join(__dirname);
const app = express();

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get("/:products", (req, res) => {
  res.sendFile(path.join(initialPath, "page.html"));
});

app.use((req, res) => {
  res.join("404 - File not found");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
