"use client";
import { Message } from "@/typings";
import fetcher from "@/utils/fetchMessages";
import useSWR from "swr";
import MessageView from "./MessageView";
// import { messages } from "../../data";

function MessageList() {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR("/api/getMessages", fetcher, { refreshInterval: 5000 });

  return (
      <div className="flex flex-col w-full ">
        {messages
          ?.sort((a, b) => a.createdAt - b.createdAt)
          .map((message: Message) => (
            <MessageView key={message.id} message={message} />
          ))}
      </div>
  );
}

export default MessageList;
