import React, { useState } from 'react';

const ChatBox = () => {
  const [showChat, setShowChat] = useState(true);
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    const answer = getAnswer(question);
    const newMessage = { sender: 'user', content: question };
    setConversation([...conversation, newMessage, { sender: 'bot', content: answer }]);
    setQuestion('');
  };

  const getAnswer = (question) => {
    // Add your logic to retrieve the appropriate pre-recorded answer based on the question
    // Here's an example of a simple hardcoded response for demonstration purposes
    switch (question.toLowerCase()) {
      case 'what is your name?':
        return 'My name is ChatBot.';
      case 'how are you?':
        return 'I am doing well, thank you!';
      case 'what time is it?':
        return `It is currently ${new Date().toLocaleTimeString()}.`;
      default:
        return 'I am sorry, but I do not have an answer for that.';
    }
  };

  return (
    <div className={`chatbox ${showChat ? 'open' : ''}`}>
      <form className="chatbox-footer" onSubmit={handleQuestionSubmit}>
        <input
          type="text"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div className="chatbox-body">
        {conversation.map((message, index) => (
          <p key={index} className={`message ${message.sender}`}>
            {message.sender === 'user' ? 'You' : 'ChatBot'}: {message.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
