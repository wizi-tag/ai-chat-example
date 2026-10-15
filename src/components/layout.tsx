import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col h-dvh min-w-0 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {children}
      </main>
    </SidebarProvider>
  )
}