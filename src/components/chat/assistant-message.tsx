import { ThumbsUp, ThumbsDown, Copy, MoreHorizontal, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface AssistantMessageProps {
  content: string
  time: string
}

export function AssistantMessage({ content, time }: AssistantMessageProps) {
  const actionIcons = [ThumbsUp, ThumbsDown, Copy, MoreHorizontal]

  return (
    <div className="group/msg text-sm space-y-2 pt-1">
      
      <div className="flex items-center gap-2">
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          CHAT A.I. +
        </span>
        <span className="text-[11px] text-zinc-400 font-medium">{time}</span>
      </div>

      <div className="text-muted-foreground whitespace-pre-line pr-4">
        {content}
      </div>

      <div className="flex items-center justify-between pt-2 pb-2 opacity-100 md:opacity-0 md:group-hover/msg:opacity-100">
        
        <div className="flex items-center gap-0.5">
          {actionIcons.map((Icon, index) => (
            <Button 
              key={index} 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg cursor-pointer"
            >
              <Icon className="h-3.5 w-3.5" />
            </Button>
          ))}
        </div>

        <Button 
          variant="ghost" 
          className="h-8 gap-1.5 px-2.5 text-xs text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg"
        >
          <RefreshCw className="h-3 w-3" />
          <span>Regenerate</span>
        </Button>
      </div>

      <Separator />
    </div>
  )
}
