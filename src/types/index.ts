export type ChatType = {
  id: string
  title: string
  isActive?: boolean
}

export type GroupedChats = {
  today: ChatType[]
  lastWeek: ChatType[]
}

export type Message = {
  id: string
  chatId: string
  role: "user" | "assistant"
  content: string
  time: number
}
