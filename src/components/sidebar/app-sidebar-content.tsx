import { SidebarContent, SidebarMenu, SidebarGroup } from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarChat } from "./sidebar-chat"
import { useChat } from "@/context/chats"

export function AppSidebarContent() {
  const { chats, groupedChats } = useChat()

  return (
    <SidebarContent className="px-2 py-0">
      <ScrollArea className="h-[calc(100vh-220px)] pr-2 relative">
        
        {chats.length > 0 ? (
          groupedChats.map((group, index) => (
            <SidebarGroup 
              key={group.title} 
              className={`p-0 ${index > 0 ? "mt-5" : ""}`}
            >
              <div className="px-3 mb-2">
                <span className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  {group.title}
                </span>
              </div>

              <SidebarMenu className="gap-1">
                {group.items.map((chat) => (
                  <SidebarChat chat={chat} key={chat.id} />
                ))}
              </SidebarMenu>
            </SidebarGroup>
          ))
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none">
            <p className="text-xs text-muted-foreground font-medium leading-normal">
              No conversations yet.<br />
              Seed data via settings.
            </p>
          </div>
        )}

      </ScrollArea>
    </SidebarContent>
  )
}
