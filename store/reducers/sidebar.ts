import { SidebarState, ToggleSidebarAction } from "@/types";
import { TOGGLE_SIDEBAR } from "../actions/sidebar";

const initialState: SidebarState = {
  isOpen: true,
};

export const sidebarReducer = (
  state = initialState,
  action: ToggleSidebarAction
): SidebarState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
