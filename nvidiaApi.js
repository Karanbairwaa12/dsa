import axios from "axios";

const invokeUrl = "https://integrate.api.nvidia.com/v1/chat/completions";

const payload = {
  model: "meta/llama-4-maverick-17b-128e-instruct",
  messages: [
    {
      role: "user",
      content: "Explain JavaScript closures in simple words"
    }
  ],
  max_tokens: 512,
  temperature: 0.7,
  top_p: 1,
  stream: false
};

const headers = {
  Authorization: `Bearer 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`,
  "Content-Type": "application/json",
  Accept: "application/json"
};

async function callNvidiaAI() {
  try {
    const response = await axios.post(invokeUrl, payload, { headers });
    console.log(response.data.choices[0].message.content);
  } catch (error) {
    console.error(
      error.response?.data || error.message
    );
  }
}

callNvidiaAI();
