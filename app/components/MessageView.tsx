"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Message } from "@/typings";

type Props = {
  message: Message;
};

function MessageView({ message }: Props) {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (message.user.id === "1") {
      setIsUser(true);
    }
  }, [message]);


  return (
    <div
      key={message.id}
      className={`flex max-w-2xl w-fit items-center p-2 ${isUser && "ml-auto self-end"}`}
    >
      <div className={`flex items-center p-2  ${isUser && "order-2"}`}>
        <Image
          className="h-12 w-12 rounded-full"
          width={50}
          height={50}
          src={message.user.avatar}
          alt={message.user.username}
        />
      </div>
      <div className="ml-4  text-white ">
        <p className={`text-xs mb-2 ${isUser && 'text-end'}`}>{message.user.username}</p>
        <div className="flex flex-1 items-end">
          <p
            className={`font-medium px-3 py-2 text-sm bg-blue-800 rounded-md mr-2 ${
              isUser && "bg-pink-700 mr-0"
            }`}
          >
            {message.message}
          </p>
          <p className={`text-xs italic  ${isUser && "-order-1 mr-2"}`}>
            {new Date(message.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageView;
