function Chatbot() {
  const { chatbot } = CONTENT;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: chatbot.greeting },
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  function matchAnswer(query) {
    const q = query.toLowerCase();
    let best = null;
    let bestScore = 0;
    for (const item of chatbot.qa) {
      let score = 0;
      for (const kw of item.keywords) {
        if (q.includes(kw)) score++;
      }
      if (score > bestScore) { bestScore = score; best = item; }
    }
    return best ? best.answer : chatbot.fallback;
  }

  function send(text) {
    if (!text.trim()) return;
    setShowSuggestions(false);
    const userMsg = { from: "user", text: text.trim() };
    const botMsg = { from: "bot", text: matchAnswer(text) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleKey(e) {
    if (e.key === "Enter") send(input);
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="chatbot-toggle"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open
            ? <path d="M18 6L6 18M6 6l12 12"/>
            : <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>
          }
        </svg>
      </button>

      {/* Chat window */}
      {open && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-dot"/>
            <span className="font-cond font-semibold text-[12px] tracking-[0.1em] uppercase">{chatbot.botName}</span>
          </div>

          {/* Messages */}
          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                {msg.text}
              </div>
            ))}

            {/* Suggestion chips */}
            {showSuggestions && (
              <div className="chatbot-suggestions">
                {chatbot.suggestions.map(s => (
                  <button key={s} className="chatbot-chip" onClick={() => send(s)}>{s}</button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="chatbot-input-bar">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask something..."
              className="chatbot-input"
            />
            <button onClick={() => send(input)} className="chatbot-send" aria-label="Send message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
