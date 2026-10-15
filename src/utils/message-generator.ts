import type { ChatType, Message } from "@/types";
import { generateUUID } from "./safe-crypto-uuid";

const USER_PHRASES = [
  "hello world test message for application sandbox",
  "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  "To be, or not to be, that is the question",
  "testing dark and light theme switching system",
  "lorem ipsum dolor sit amet, consectetur adipiscing",
  "Houston, we have problems....",
  "Can a robot write a symphony? Can a robot turn a canvas into a beautiful masterpiece?",
  "health check"
];

const ASSISTANT_PHRASES = [
  "Hello! I am a mock message assistant. Your layout state is successfully working.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Never, never gonna give you up Im never, ever gonna stop Not the way I feel about you Girl, I just cant live without you",
  "Bip-Bop Bip-bi-bi-bop",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
  "Omae wa mou shindeiru.... Nani?"
];


function getRandomBaseTimestamp(): number {
  const now = Date.now();
  const tenDaysInMs = 10 * 24 * 60 * 60 * 1000;
  const randomOffset = Math.floor(Math.random() * tenDaysInMs);
  return now - randomOffset;
}

export function generateMockMessages(chats: ChatType[]): Message[] {
  const messages: Message[] = [];
  const fiveMinutesInMs = 5 * 60 * 1000;

  chats.forEach((chat) => {
    const pairsCount = Math.floor(Math.random() * 7) + 1;
    
    let currentTimestamp = getRandomBaseTimestamp();

    for (let i = 0; i < pairsCount; i++) {
      
      const randomUserText = USER_PHRASES[Math.floor(Math.random() * USER_PHRASES.length)];
      messages.push({
        id: generateUUID(),
        chatId: chat.id,
        role: "user",
        content: randomUserText,
        time: currentTimestamp
      });

      currentTimestamp += fiveMinutesInMs;

      const randomAssistantText = ASSISTANT_PHRASES[Math.floor(Math.random() * ASSISTANT_PHRASES.length)];
      messages.push({
        id: generateUUID(),
        chatId: chat.id,
        role: "assistant",
        content: randomAssistantText,
        time: currentTimestamp
      });
    }
  });

  return messages;
}


export function generateNewAssistantMessage(chatId: string) {
    const randomAssistantText = ASSISTANT_PHRASES[Math.floor(Math.random() * ASSISTANT_PHRASES.length)];
    return ({
      id: generateUUID(),
      chatId: chatId,
      role: "assistant" as const,
      content: randomAssistantText,
      time: Date.now(),
    })
}