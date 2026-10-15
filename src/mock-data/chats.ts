import type { ChatType } from "@/types";
import { generateUUID } from "@/utils/safe-crypto-uuid";
import { generateTitle } from "@/utils/title-generator";

const CHATS_COUNT = 20;

export const CHATS: ChatType[] = Array.from({ length: CHATS_COUNT }, () => ({
  id: generateUUID(),
  title: generateTitle()
}));

