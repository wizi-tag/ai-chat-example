import { Plus, Search } from "lucide-react"
import { SidebarHeader, SidebarGroupLabel, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useChat } from "@/context/chats"

export function AppSidebarHeader() {

  const { clearAllChats, setActiveChatId } = useChat();

  return (
    <>
      <SidebarHeader className="p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-foreground">
            CHAT A.I. <span className="text-blue-600">+</span >
          </span>
          
          <div className="hidden md:block">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            className="flex-1 justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-4xl h-10"
            onClick={()=>setActiveChatId(null)}
          >
            <Plus className="h-5 w-5 stroke-[2.5]" />
            <span className="text-sm font-medium">New chat</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-10 w-10 z-10 text-muted-foreground hover:text-foreground rounded-4xl shrink-0"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>

      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground tracking-wider p-0 h-auto">
          Your conversations
        </SidebarGroupLabel>
        <button 
          type="button"
          className="text-xs text-muted-foreground hover:text-foreground font-medium cursor-pointer"
          onClick={clearAllChats}
        >
          Clear All
        </button>
      </div>

      <Separator />
    </>
  )
}
