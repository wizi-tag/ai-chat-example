import { Settings } from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogTitle, 
  DialogTrigger, 
  DialogHeader 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CHATS } from "@/mock-data/chats"
import { MESSAGES } from "@/mock-data/messages"

export function SettingsDialog() {
  const handleFillMockData = () => {
    localStorage.setItem("chats", JSON.stringify(CHATS))
    localStorage.setItem("messages", JSON.stringify(MESSAGES))
    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost" className="w-full justify-start h-11 px-3 rounded-xl text-muted-foreground hover:text-foreground text-sm font-medium">
          <Settings/>
          Settings
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[360px] p-6 rounded-2xl">
        <DialogHeader className="text-left">
          <DialogTitle className="text-base font-bold">Settings</DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground mt-1">
            Click the button below to seed your Local Storage with mock data.
          </DialogDescription>
        </DialogHeader>
        
        <Button onClick={handleFillMockData} className="w-full h-10 mt-4 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
          Fill with Mock Data
        </Button>
      </DialogContent>
    </Dialog>
  )
}
