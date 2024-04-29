const express = require("express");
const app = express();
const port = 3000; // Or any port you prefer

// Serve static files from the current directory
app.use(express.static(__dirname));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
