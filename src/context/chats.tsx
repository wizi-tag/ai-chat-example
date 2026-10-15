import { useChats } from "@/hooks/use-chats"
import { createContext, useContext, type ReactNode } from "react"

const ChatContext = createContext<ReturnType<typeof useChats> | null>(null)

export function ChatProvider({ children }: { children: ReactNode }) {
  const state = useChats()
  return <ChatContext.Provider value={state}>{children}</ChatContext.Provider>
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) throw new Error("Ctx err")
  return context
}
