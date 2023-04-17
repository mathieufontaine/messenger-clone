"use client";

import { Message } from "@/typings";
import fetcher from "@/utils/fetchMessages";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";

function ChatInput() {
  const [input, setInput] = useState("");
  const {data: messages, error, mutate} = useSWR('/api/getMessages', fetcher, {refreshInterval: 5000})
    
  console.log(messages)

  const uploadMessageToUpstash = async (message: Message) => {
    const response = await fetch("/api/addMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return [data.message, ...messages!];
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const message: Message = {
      id: uuidv4(),
      message: input,
      createdAt: Date.now(),
      user: {
        id: "1",
        username: "John",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
    };
    await mutate(uploadMessageToUpstash(message as Message), {
        optimisticData: [message, ...messages!],
        rollbackOnError: true
    })
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
