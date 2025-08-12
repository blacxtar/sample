const TypingIndicator = () => {
  return (
    <div className="flex items-start space-x-3 mb-6 animate-fade-in-up">
      {/* AI Avatar */}
      <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <div className="w-4 h-4 bg-white rounded-sm"></div>
      </div>
      
      {/* Typing Animation */}
      <div className="chat-bubble-ai">
        <div className="typing-indicator">
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;