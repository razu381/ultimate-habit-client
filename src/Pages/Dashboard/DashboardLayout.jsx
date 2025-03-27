import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import AppSidebar from "./AppSidebar";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

function DashboardLayout() {
  return (
    <SidebarProvider className="flex">
      <AppSidebar />
      <div>
        <SidebarTrigger />
        <Outlet />
      </div>
      <Toaster />
    </SidebarProvider>
  );
}

export default DashboardLayout;
