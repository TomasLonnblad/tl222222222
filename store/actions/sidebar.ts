import { ToggleSidebarAction } from "@/types";

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR" as const;

export const toggleSidebar = (): ToggleSidebarAction => ({
  type: TOGGLE_SIDEBAR,
});
