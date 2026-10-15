import { ChatArea } from "@/components/chat/chat-area"
import Layout from "@/components/layout"
import { ChatProvider } from "./context/chats"

export function App() {
  return (
    <ChatProvider>
      <Layout>
        <ChatArea/>
      </Layout>
    </ChatProvider>
  )
}

export default App
