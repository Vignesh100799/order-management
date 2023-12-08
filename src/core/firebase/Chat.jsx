// Chat.js

import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig'; // Import the db export
import { collection, query, onSnapshot, addDoc } from 'firebase/firestore';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(messagesData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        timestamp: new Date(),
      });
      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
