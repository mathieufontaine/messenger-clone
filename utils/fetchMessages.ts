import { Message } from "../typings";

export const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/getMessages");
  const data = await response.json();
  const messages : Message[] = data.messages;
    return messages;
};

export default fetcher;
