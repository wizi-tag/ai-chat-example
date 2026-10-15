import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { MessageInput } from "./message-input"
import { ChatFeed } from "./chat-feed"
import { USER } from "@/mock-data/user"

export function ChatArea() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <div className="relative flex flex-col h-dvh w-full overflow-hidden bg-background text-foreground">
      
      <header className="flex h-14 items-center justify-between px-4 border-b border bg-background shrink-0 md:hidden">
        <SidebarTrigger className="justify-self-start text-muted-foreground hover:text-foreground" />
        <span className="text-sm font-semibold truncate max-w-[200px]">New Chat</span>
        <div className="w-8" />
      </header>

      {isCollapsed && (
        <div className="hidden md:block absolute top-4 left-4 z-30">
          <SidebarTrigger className="h-8 w-8 bg-background border border-border rounded-full text-muted-foreground hover:text-foreground cursor-pointer" />
        </div>
      )}

      <div className="flex-1 overflow-y-auto w-full">
        <div className="max-w-3xl mx-auto px-4 py-4 md:px-8 space-y-8 pb-24">
          <ChatFeed />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10">
        <div className="max-w-3xl mx-auto pointer-events-auto">
          <MessageInput />
        </div>
      </div>

      {!USER.isPro &&
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block pointer-events-none">
          <button 
            type="button"
            className="pointer-events-auto p-3 bg-blue-600 text-white text-[11px] font-semibold [writing-mode:vertical-lr] uppercase tracking-widest rounded-l-2xl cursor-pointer"
          >
            Upgrade to Pro ✨
          </button>
        </div>
      }

    </div>
  )
}
