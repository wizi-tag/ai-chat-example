import type { Message } from "@/types";
import { generateMockMessages } from "@/utils/message-generator";
import { CHATS } from "./chats";


export const MESSAGES: Message[] = generateMockMessages(CHATS);
