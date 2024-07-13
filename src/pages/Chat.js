import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [currentChatUser, setCurrentChatUser] = useState(null);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    loadChats();
  }, []);

  const loadChats = () => {
    const storedChats = JSON.parse(localStorage.getItem('chats')) || {};
    setChats(Object.keys(storedChats));
  };

  const saveMessage = (user, message) => {
    const storedChats = JSON.parse(localStorage.getItem('chats')) || {};
    if (!storedChats[user]) {
      storedChats[user] = [];
    }
    storedChats[user].push(message);
    localStorage.setItem('chats', JSON.stringify(storedChats));
  };

  const loadMessages = (user) => {
    const storedChats = JSON.parse(localStorage.getItem('chats')) || {};
    setChatLog(storedChats[user] || []);
  };

  const handleStartChat = () => {
    if (username.trim()) {
      setCurrentChatUser(username.trim());
      loadMessages(username.trim());
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && currentChatUser) {
      saveMessage(currentChatUser, message.trim());
      setChatLog((prevChatLog) => [...prevChatLog, message.trim()]);
      setMessage('');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px' }}>
        <h3>Chats</h3>
        <select size="10" onChange={(e) => {
          setCurrentChatUser(e.target.value);
          loadMessages(e.target.value);
        }}>
          {chats.map((user) => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>
      </div>
      <div style={{ flexGrow: 1, padding: '10px' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Chatroom Name"
        />
        <button onClick={handleStartChat}>Start Chat</button>
        <div style={{
          height: '400px', border: '1px solid #ccc', padding: '10px', overflowY: 'scroll', marginBottom: '10px'
        }}>
          {chatLog.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;