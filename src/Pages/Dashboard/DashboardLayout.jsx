import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import AppSidebar from "./AppSidebar";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <SidebarProvider className="flex">
      <AppSidebar />
      <div>
        <SidebarTrigger />
        <Outlet />
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
