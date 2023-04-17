"use client";

import { FormEvent, useState } from "react";

function ChatInput() {
  const [input, setInput] = useState("");

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input) return;
    const messageToSend = input;
    setInput("");
  };

  return (
    <form
      className="flex w-full fixed bottom-0 p-4 z-50 bg-slate-800"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="border border-gray-300 rounded rounded-r-none w-full 
        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent 
        py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed text-black"
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded rounded-l-none"
        disabled={!input ? true : false}
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
