import { FC } from "react";
import { SidebarItem } from "./SidebarItem";

export const Sidebar: FC = () => {
  return (
    <aside>
      <SidebarItem pathname="/">Dashboard</SidebarItem>
      <SidebarItem pathname="/users">Users</SidebarItem>
      <SidebarItem pathname="/settings">Settings</SidebarItem>
    </aside>
  );
};
