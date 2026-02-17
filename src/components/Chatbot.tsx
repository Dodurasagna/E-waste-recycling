// // src/components/Chatbot.tsx
// import { useState } from 'react';

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! How can I help you today?' }]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;
//     const newMessages = [...messages, { role: 'user', content: input }];
//     setMessages(newMessages);
//     setInput('');
//     setLoading(true);

//     try {
//       const res = await fetch('http://localhost:5000/chat', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ messages: newMessages }),
// });


//       const data = await res.json();
//       const reply = data.choices?.[0]?.message?.content || 'Something went wrong.';
//       setMessages([...newMessages, { role: 'assistant', content: reply }]);
//     } catch (err) {
//       setMessages([...newMessages, { role: 'assistant', content: '❌ Failed to fetch response.' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {!isOpen ? (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
//         >
//           💬 Chat
//         </button>
//       ) : (
//         <div className="w-80 bg-white border rounded-lg shadow-lg flex flex-col overflow-hidden">
//           <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
//             <span>Ask EcoBot</span>
//             <button onClick={() => setIsOpen(false)}>✖</button>
//           </div>
//           <div className="p-3 h-80 overflow-y-auto text-sm space-y-2">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`p-2 rounded-md ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}
//               >
//                 {msg.content}
//               </div>
//             ))}
//           </div>
//           <div className="p-2 border-t flex">
//             <input
//               className="flex-1 px-2 py-1 border rounded-md"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your question..."
//               onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//             />
//             <button
//               className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-md"
//               onClick={sendMessage}
//               disabled={loading}
//             >
//               {loading ? '...' : 'Send'}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


// import express from 'express';
// import cors from 'cors';
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/chat', async (req, res) => {
//   try {
//     const { messages } = req.body;

//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages,
//       }),
//     });

//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server listening on http://localhost:${PORT}`);
// });


// src/components/Chatbot.tsx
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m EcoBot. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'Sorry, no reply.';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: '❌ Could not reach server.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
        >
          💬 Chat
        </button>
      ) : (
        <div className="w-80 bg-white border rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span>Ask EcoBot</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="p-3 h-80 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md ${
                  msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              className="flex-1 px-2 py-1 border rounded-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-md"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
