import { AnyAction } from "redux";

export interface SidebarState {
  isOpen: boolean;
}

export interface RootState {
  sidebar: SidebarState;
}

export interface ToggleSidebarAction extends AnyAction {
  type: "TOGGLE_SIDEBAR";
}
