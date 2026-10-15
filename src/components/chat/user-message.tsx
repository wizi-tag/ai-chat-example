import { useState } from "react"
import { Edit2, Check, X } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { USER } from "@/mock-data/user"

interface UserMessageProps {
  content: string
  time: string
}

export function UserMessage({ content }: UserMessageProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(content)

  return (
    <div className="group/msg text-sm flex items-start gap-3 w-full">
      <Avatar className="h-7 w-7 mt-0.5 shadow-sm">
        <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">{USER.alt}</AvatarFallback>
      </Avatar>

      {isEditing ? (
        <div className="flex-1 space-y-1.5">
          <textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="w-full text-sm p-3 border border-zinc-200 rounded-xl outline-none bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 resize-none h-24 text-foreground"
          />
          <div className="flex justify-end gap-1.5">
            <Button 
              size="sm" 
              variant="outline" 
              className="h-7 px-2.5 rounded-lg text-xs" 
              onClick={() => setIsEditing(false)}
            >
              <X className="h-3 w-3 mr-1" /> Cancel
            </Button>
            <Button 
              size="sm" 
              className="h-7 px-2.5 rounded-lg text-xs bg-blue-600 text-white" 
              onClick={() => setIsEditing(false)}
            >
              <Check className="h-3 w-3 mr-1" /> Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-between min-w-0 gap-4">
          <p className="text-zinc-400 dark:text-zinc-500 italic truncate flex-1 select-none">
            {editValue}
          </p>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 cursor-pointer opacity-0 group-hover/msg:opacity-100 hover:text-blue-600 rounded-lg"
            onClick={() => setIsEditing(true)}
          >
            <Edit2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      )}
    </div>
  )
}
