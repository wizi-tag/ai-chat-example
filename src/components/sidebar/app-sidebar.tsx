import {Sidebar } from "@/components/ui/sidebar"

import { AppSidebarHeader } from "./app-sidebar-header"
import { AppSidebarContent } from "./app-sidebar-content"
import { AppSidebarFooter } from "./app-sidebar-footer"

export function AppSidebar() {
  return (
    <Sidebar 
      className="p-2 border-none [&_[data-sidebar=sidebar]]:rounded-4xl"
      variant="floating" 
    >
      <AppSidebarHeader/>
      <AppSidebarContent/>
      <AppSidebarFooter/>
    </Sidebar>
  )
};
