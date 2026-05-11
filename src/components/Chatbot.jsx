// Chatbot.jsx
import React, { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hello 👋 Welcome to LuxuryCarVisit. How can I help you?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const botResponse = (message) => {
    const text = message.toLowerCase();

    if (text.includes("hello")) {
      return "Hi 👋 Welcome to LuxuryCarVisit!";
    }

    if (text.includes("car")) {
      return "We have Mercedes, BMW, Hellcat, Ferrari and more 🚗";
    }

    if (text.includes("price")) {
      return "Prices depend on the car model you choose.";
    }

    if (text.includes("payment")) {
      return "You can pay using M-Pesa securely.";
    }

    if (text.includes("bmw")) {
      return "BMW models are available in our latest collection.";
    }

    if (text.includes("thanks")) {
      return "You are welcome 😊";
    }

    if (text.includes("bye")) {
      return "Goodbye 👋 Visit again!";
    }

    return "Sorry, I did not understand that.";
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    const reply = {
      text: botResponse(input),
      sender: "bot",
    };

    setMessages([...messages, userMessage, reply]);
    setInput("");
  };

  return (
    <>
      {/* 🔘 COLLAPSED BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "12px 18px",
            borderRadius: "30px",
            background: "gold",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Chat 💬
        </button>
      )}

      {/* 💬 CHATBOX */}
      {open && (
        <div className="chatbot">
          <div className="chat-header">
            LuxuryCar ChatBot

            {/* ❌ CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              style={{
                float: "right",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "chat-message user"
                    : "chat-message bot"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;