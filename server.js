// server.js
const express = require("express");
const cors = require("cors");
const bot = require("./chatbot"); // Import the chatbot.js file


const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON body in POST requests

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await getChatbotResponse(prompt);
    res.json({ answer: response });
  } catch (error) {
    res.status(500).json({ error: "Failed to get response" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
