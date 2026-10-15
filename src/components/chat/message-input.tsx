import { useState } from "react";
import { ArrowUp, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@/context/chats"

export function MessageInput() {

  const { sendMessage } = useChat();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!text.trim()) return;
    sendMessage(text)
    setText("");
  }


  return (
    <form
      onSubmit={handleSubmit} 
      className="flex items-center gap-2 p-2 bg-white border border-zinc-200 rounded-4xl dark:bg-zinc-900 dark:border-zinc-800"
    >
      
      <span className="text-2xl cursor-pointer ml-2 select-none">🧠</span>

      <input 
        type="text" 
        placeholder="What's in your mind?..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 bg-transparent px-2 text-sm outline-none text-foreground placeholder:text-muted-foreground"
      />

      <div className="flex items-center gap-2">
        <Button 
          type="button" 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 text-zinc-400 hover:text-zinc-600 rounded-xl hidden sm:flex"
        >
          <Smile className="h-4 w-4" />
        </Button>

        <Button 
          type="submit" 
          size="icon" 
          className="h-9 w-9 bg-blue-600 text-white hover:bg-blue-700 rounded-full"
          onClick={() => sendMessage}
        >
          <ArrowUp className="h-4 w-4 stroke-[2.5]" />
        </Button>
      </div>

    </form>
  )
}
