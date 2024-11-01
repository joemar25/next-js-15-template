"use client"

import {
  File,
  Files,
  Frame,
  LayoutDashboard,
  LeafyGreen,
  LifeBuoy,
  Map,
  PieChart,
  Send,
} from "lucide-react"

import { NavMain } from "@/components/custom/sidebar/nav-main"
import { NavUser } from "@/components/custom/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Image from "next/image"
import { NavSecondary } from "./nav-secondary"


const data = {
  user: {
    name: "user",
    email: "user@gmail.com",
    avatar: "/images/user-random-1.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Documents",
      url: "/documents",
      icon: File,
      isActive: false,
      items: [
        {
          title: "Incoming",
          url: "/documents/incoming",
        },
        {
          title: "Recieved",
          url: "/documents/recieved",
        },
        {
          title: "Outgoing",
          url: "/documents/outgoing",
        },
      ],
    },
    {
      title: "Completed",
      url: "/completed",
      icon: LeafyGreen,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: Files,
    },
  ],
  navSecondary: [
    {
      title: "Customer Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Send Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "1",
      url: "#",
      icon: Frame,
    },
    {
      name: "2",
      url: "#",
      icon: PieChart,
    },
    {
      name: "3",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">

                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <Image src={"/images/cube.png"} alt="Logo" width={32} height={32} />
                </div>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">IPHOPHIL</span>
                  <span className="truncate text-xs">DMS</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>

        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />

        {/*

        mar-note: For future purposes
      
        <NavProjects projects={data.projects} />
        
        */}

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
