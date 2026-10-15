import { MessageSquare, Edit2, Trash2 } from "lucide-react"
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import type { ChatType } from "@/types"
import { useChat } from "@/context/chats"

type SidebarChatProps = {
  chat: ChatType
}

export function SidebarChat({ chat }: SidebarChatProps) {

  const { activeChatId, setActiveChatId } = useChat() 
  const selectedChat = activeChatId === chat.id

  return (
    <SidebarMenuItem className="group/item relative list-none">
      <SidebarMenuButton 
        className="w-full gap-3 px-3 py-5 rounded-xl text-sidebar-foreground"
        isActive={selectedChat}
        onClick={() => setActiveChatId(chat.id)}
      >
        <MessageSquare className="h-4 w-4 shrink-0 text-muted-foreground group-hover/item:text-blue-500" />
        
        <span className="truncate text-sm font-medium pr-14 block w-full text-left">
          {chat.title}
        </span>
      </SidebarMenuButton>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/item:opacity-100 flex items-center gap-0.5 h-8 rounded-r-xl">
        <Button 
          variant="ghost"
          size="icon"
          className="h-7 w-7 hover:text-foreground rounded-lg cursor-pointer"
        >
          <Edit2 className="h-3.5 w-3.5" />
        </Button>
        <Button 
          variant="ghost"
          size="icon"
          className="h-7 w-7 hover:text-destructive rounded-lg cursor-pointer"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>
    </SidebarMenuItem>
  )
}
