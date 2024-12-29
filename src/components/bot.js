import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = async (e) => {
    e.preventDefault();

    // Add user message to the chat history
    const userMessage = { role: "user", content: userInput };
    setMessages([...messages, userMessage]);

    // Call backend to get response from OpenAI API
    try {
      const response = await axios.post("http://localhost:5000/chat", {
        prompt: userInput,
      });

      const botMessage = { role: "bot", content: response.data };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error communicating with server:", error);
    }

    // Clear the input field
    setUserInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleUserInput} className="chat-input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="chat-submit-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
