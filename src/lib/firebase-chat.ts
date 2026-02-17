import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const MESSAGES_COLLECTION = "messages"; // 📁 You can change the collection name if needed

// Save a new message to Firebase
export const sendMessage = async (text: string, sender = "user") => {
  if (!text.trim()) return;

  await addDoc(collection(db, MESSAGES_COLLECTION), {
    text,
    sender,
    createdAt: serverTimestamp(),
  });

  // Dummy bot reply
  if (sender === "user") {
    setTimeout(() => {
      addDoc(collection(db, MESSAGES_COLLECTION), {
        text: `You said: "${text}" 🤖`,
        sender: "bot",
        createdAt: serverTimestamp(),
      });
    }, 800); // Simulate response delay
  }
};

// Listen to real-time messages
export const listenToMessages = (callback: (messages: any[]) => void) => {
  const q = query(
    collection(db, MESSAGES_COLLECTION),
    orderBy("createdAt", "asc")
  );

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(messages);
  });
};
