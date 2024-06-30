import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const onChange = (e) => setMessage(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/chatbot', { message });
      setResponse(res.data.response);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Chat with our bot</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Type a message'
          value={message}
          onChange={onChange}
          required
        />
        <input type='submit' value='Send' />
      </form>
      <p>Bot: {response}</p>
    </div>
  );
};

export default Chatbot;