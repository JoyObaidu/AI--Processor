import { useState } from 'react';
import Input from './components/Input';
import Output from './components/Output';
import SelecLanguage from './components/SelectLanguage';
import Buttons from './components/Buttons';
import { detectLanguage, summarizeText, translateText } from './api';
import './App.css'

function App() {
  const [messages, setMessages] = useState([]);

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  //Handle User Input
  const handleSend = async (text) => {
    const newMessage = { text };
    setMessages((prev) => [...prev, newMessage]);

    const detectedLanguage = await detectLanguage(text);
    if (detectedLanguage) {
      newMessage.language = detectedLanguage;
    }

    setMessages((prev) => [...prev.slice(0, -1), newMessage]);
  };

  //Summarize the Message entered
  const handleSummarize = async () => {
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.language !== "en") return;

    const summary = await summarizeText(lastMessage.text);
    if (summary) {
      lastMessage.summary = summary;
      setMessages([...messages]);
    }
  };

  //Translate the Message
  const handleTranslate = async () => {
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage) return;

    const translation = await translateText(lastMessage.text, selectedLanguage);
    if (translation) {
      lastMessage.translation = translation;
      setMessages([...messages]);
    }
  };


  return (
    <>
    <h1 className="text-2xl font-bold mb-4">AI-Powered Text Processing</h1>
    <Input onSubmit={handleSend}/>
    <Output messages={messages}/>
    <SelecLanguage onChange={setSelectedLanguage}/>
    <Buttons onSummarize={handleSummarize} onTranslate={handleTranslate}/>
    </>
  )
}

export default App;
