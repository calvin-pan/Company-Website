import React, { useState } from 'react';

const ChatBox = () => {
  const [showChat, setShowChat] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    const answer = getAnswer(question);
    setAnswer(answer);
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
      <div className="chatbox-header">
        <h5>ChatBot</h5>
        <button className="close-button" onClick={handleToggleChat}>
          X
        </button>
      </div>
      <div className="chatbox-body">
        {answer && (
          <p>
            <strong>ChatBot:</strong> {answer}
          </p>
        )}
      </div>
      <form className="chatbox-footer" onSubmit={handleQuestionSubmit}>
        <div className="conversation-container">
          {answer ? (
            <p>
              <strong>You:</strong> {question}
            </p>
          ) : null}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
