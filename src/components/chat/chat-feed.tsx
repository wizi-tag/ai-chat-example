import { AssistantMessage } from "./assistant-message"
import { UserMessage } from "./user-message"
import { useChat } from "@/context/chats"
import { formatTime } from "@/utils/format-time";


export function ChatFeed() {

  const { messages } = useChat();

  if (!messages.length) {
    return (
      <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
        <span className="text-xl md:text-2xl text-center font-semibold text-muted-foreground">
          My code is ready. Is your prompt?
        </span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {messages.map((item) => {
        if (item.role === "user") {
          return (
            <UserMessage 
              key={item.id} 
              content={item.content} 
              time={formatTime(item.time)} 
            />
          )
        }
        
        return (
          <AssistantMessage 
            key={item.id} 
            content={item.content} 
            time={formatTime(item.time)} 
          />
        )
      })}
    </div>
  )
}
