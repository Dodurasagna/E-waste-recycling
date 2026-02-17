// // index.js (backend)
// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/chat", async (req, res) => {
//   try {
//     const { messages } = req.body;

//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages,
//       }),
//     });

//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error("❌ Error:", err);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server listening on http://localhost:${PORT}`);
// });


// index.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required.' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
      }),
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || '❌ No reply from OpenAI.';
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ AI backend running at http://localhost:${PORT}`);
});
