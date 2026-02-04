
import { useState } from "react";
import axios from "axios";

const NvidiaChat = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!prompt.trim()) return;

    const userMsg = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3002/v1/chat/completions",
        {
          messages: [...messages, userMsg],
          temperature: 0.7,
          max_tokens: 500
        }
      );

      const aiMsg = response.data.choices[0].message;
      setMessages((prev) => [...prev, aiMsg]);

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error calling NVIDIA API" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendPrompt();
    }
  };

  // 🔹 Split text & code blocks
  const renderContent = (content) => {
    const parts = content.split("```");

    return parts.map((part, index) => {
      // Code block
      if (index % 2 === 1) {
        // Remove language name (js, ts, etc.)
        const code = part.replace(/^\w+\n/, "");

        return (
          <pre
            key={index}
            style={{
              background: "#020617",
              color: "#e5e7eb",
              padding: 14,
              borderRadius: 8,
              overflowX: "auto",
              marginTop: 10,
              fontSize: 13,
              border: "1px solid #334155"
            }}
          >
            <code>{code}</code>
          </pre>
        );
      }

      // Normal text
      return (
        <p
          key={index}
          style={{
            margin: "6px 0",
            lineHeight: 1.6
          }}
        >
          {part}
        </p>
      );
    });
  };

  const renderMessage = (msg, index) => {
    const isUser = msg.role === "user";

    return (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          marginBottom: 16
        }}
      >
        <div
          style={{
            maxWidth: "75%",
            padding: 14,
            borderRadius: 12,
            background: isUser ? "#2563eb" : "#111827",
            color: "#fff"
          }}
        >
          {isUser ? msg.content : renderContent(msg.content)}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        background: "#0f172a",
        borderRadius: 12,
        border: "1px solid #1e293b",
        color: "#fff"
      }}
    >
      <div
        style={{
          padding: 16,
          borderBottom: "1px solid #1e293b",
          fontWeight: "bold"
        }}
      >
        NVIDIA LLaMA-4 Chat
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 16
        }}
      >
        {messages.map(renderMessage)}
        {loading && <div style={{ opacity: 0.6 }}>AI is thinking…</div>}
      </div>

      <div
        style={{
          padding: 16,
          borderTop: "1px solid #1e293b"
        }}
      >
        <textarea
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter to send • Shift+Enter for new line"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            background: "#020617",
            color: "#fff",
            border: "1px solid #334155",
            resize: "none"
          }}
        />

        <button
          onClick={sendPrompt}
          disabled={loading}
          style={{
            marginTop: 10,
            padding: "10px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          {loading ? "Thinking…" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default NvidiaChat;
