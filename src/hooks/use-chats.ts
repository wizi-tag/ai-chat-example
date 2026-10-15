import { useState, useEffect } from "react"
import type { ChatType, Message } from "@/types"
import { generateUUID } from "@/utils/safe-crypto-uuid"
import { generateTitle } from "@/utils/title-generator"
import { generateNewAssistantMessage } from "@/utils/message-generator"


export function useChats() {
  const [sortedChats, setSortedChats] = useState<ChatType[]>([])
  const [allMessages, setAllMessages] = useState<Message[]>([])
  const [activeChatId, setActiveChatId] = useState<string | null>(null)

  useEffect(() => {
    const lsChats = localStorage.getItem("chats")
    const lsMessages = localStorage.getItem("messages")

    if (!lsChats || !lsMessages) return

    const parsedChats: ChatType[] = JSON.parse(lsChats)
    const parsedMessages: Message[] = JSON.parse(lsMessages)

    const msgByChat = Object.groupBy(parsedMessages, (msg) => msg.chatId) as Record<string, Message[]>
    
    Object.keys(msgByChat).forEach((chatId) => {
      msgByChat[chatId].sort((a, b) => a.time - b.time)
    })

    Object.keys(msgByChat).forEach((chatId) => {
      msgByChat[chatId].sort((a, b) => a.time - b.time)
    })

    const sortedMessagesList = Object.values(msgByChat).flat()

    const sortedChatsList = [...parsedChats].sort((a, b) => {
      const msgA = msgByChat[a.id] || []
      const msgB = msgByChat[b.id] || []

      const latestTimestampA = msgA.length > 0 ? msgA[msgA.length - 1].time : 0
      const latestTimestampB = msgB.length > 0 ? msgB[msgB.length - 1].time : 0

      return latestTimestampB - latestTimestampA
    })

    setSortedChats(sortedChatsList)
    setAllMessages(sortedMessagesList)

    if (sortedChatsList.length > 0) {
      setActiveChatId(sortedChatsList[0].id)
    }
  }, [])

  const activeChatMessages = allMessages.filter((msg) => msg.chatId === activeChatId)
  const activeChat = sortedChats.find((c) => c.id === activeChatId)

  const clearAllChats = () => {
    localStorage.removeItem("chats")
    localStorage.removeItem("messages")
    setSortedChats([])
    setAllMessages([])
    setActiveChatId(null)
  }

  const now = Date.now()
  const oneDay = 24 * 60 * 60 * 1000

  const recentChats = sortedChats.filter((chat) => {
    const lastMsg = allMessages.findLast((m) => m.chatId === chat.id)
    const latestTime = lastMsg ? lastMsg.time : now
    return now - latestTime < oneDay
  })

  const lastWeekChats = sortedChats.filter((chat) => {
    const lastMsg = allMessages.findLast((m) => m.chatId === chat.id)
    const latestTime = lastMsg ? lastMsg.time : now
    return now - latestTime >= oneDay
  })

  
  const chatGroups = [
    { title: "Recent", items: recentChats },
    { title: "Last 7 Days", items: lastWeekChats },
  ].filter((g) => g.items.length > 0)

  const sendMessage = (content: string) => {
    const trimmedContent = content.trim(); 
    if(!trimmedContent) return;

    let currentChatId = activeChatId
    
    if(currentChatId === null) {
      currentChatId = generateUUID(); 
      const newChat: ChatType = {
        id: currentChatId,
        title: generateTitle(),
      }
      const updatedChats = [newChat, ...sortedChats];
      setSortedChats(updatedChats);
      setActiveChatId(currentChatId);
      localStorage.setItem("chats", JSON.stringify(updatedChats))
    }

    const newUserMessage: Message = {
      id: generateUUID(),
      chatId: currentChatId,
      role: "user",
      content: trimmedContent,
      time: Date.now(),
    }

    const updatedMessages = [...allMessages, newUserMessage];
    setAllMessages(updatedMessages)
    localStorage.setItem("messages", JSON.stringify(updatedMessages));

    setTimeout(() => {
      const newAssistantMessage = generateNewAssistantMessage(currentChatId);

      setAllMessages((prev) => {
        const finalMessages = [...prev, newAssistantMessage]
        localStorage.setItem("messages", JSON.stringify(finalMessages))
        return finalMessages
      })

    }, 1000)
  }

  return {
    chats: sortedChats,
    groupedChats: chatGroups,
    activeChatId,
    setActiveChatId,
    clearAllChats,
    sendMessage,
    activeChat,
    messages: activeChatMessages,
    
  }
}
