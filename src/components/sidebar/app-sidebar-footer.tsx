import { MoreHorizontal, Sparkles } from "lucide-react"
import { SidebarFooter } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { SettingsDialog } from "./settings-dialog"
import { USER } from "@/mock-data/user"

export function AppSidebarFooter() {
  return (
    <>
      <Separator />
      <SidebarFooter className="p-4 flex flex-col gap-3">
        <SettingsDialog/>
        
        <div className="flex items-center justify-between p-1.5 pl-2 border border-border rounded-xl bg-muted/30 shadow-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative shrink-0">
              <Avatar className="h-8 w-8 ring-2 ring-background shadow-xs">
                <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">{USER.alt}</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold truncate text-foreground tracking-tight ">
                {USER.name}
              </span>
              {USER.isPro &&
                <div className="flex items-center gap-1 mt-0.5">
                  <Sparkles className="h-3 w-3 text-blue-500 fill-blue-500/20 shrink-0" />
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                    Pro Account
                  </span>
                </div>
              }
            </div>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-muted-foreground hover:text-foreground rounded-lg"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </>
  )
}
