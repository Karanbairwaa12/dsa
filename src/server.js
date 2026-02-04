const express = require("express")
const cors = require("cors")
const axios = require("axios")
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.post("/v1/chat/completions", async (req, res) => {
    try {
        const { messages, temperature, max_tokens } = req.body;
        console.log(messages, "message")

        const nvidiaResponse = await axios.post(
            "https://integrate.api.nvidia.com/v1/chat/completions",
            {
                model: "meta/llama-4-maverick-17b-128e-instruct",
                messages,
                temperature: temperature ?? 0.7,
                max_tokens: max_tokens ?? 512,
                stream: false
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        // Return response exactly how Void expects
        res.json(nvidiaResponse.data);
    } catch (error) {
        console.error("NVIDIA API Error:", error.response?.data || error.message);

        res.status(500).json({
            error: {
                message: "Failed to connect to NVIDIA API"
            }
        });
    }
})

app.get("/", (req, res) => {
  res.send("NVIDIA ↔ Void adapter running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
