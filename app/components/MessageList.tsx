"use client";
import { Message } from "@/typings";
import fetcher from "@/utils/fetchMessages";
import useSWR from "swr";
import MessageView from "./MessageView";
import { useEffect } from "react";
import { clientPusher } from "@/utils/pusher";
// import { messages } from "../../data";

function MessageList() {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR("/api/getMessages", fetcher, { refreshInterval: 5000 });

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
    channel.bind("newMessage", async (data: Message) => {
      if (messages?.find((message: Message) => message.id === data.id)) return;
      if (!messages) {
        mutate(fetcher);
      } else {
        await mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate]);

  if (error) return <div>failed to load</div>;
  if (!messages) return <div>loading...</div>;

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
