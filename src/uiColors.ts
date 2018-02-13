import {
    BLACK,
    BLUE1,
    BLUE2,
    BLUE3,
    BLUE4,
    DARK_GRAY1,
    DARK_GRAY2,
    DARK_GRAY3,
    DARK_GRAY4,
    ORANGE3,
    RED3,
    WHITE,
} from "./colors";

export default {
    "selection.background": BLUE4,
    errorForeground: RED3,
    "badge.background": BLUE3,
    "button.background": BLUE3,
    "button.hoverBackground": BLUE2,
    "button.foreground": WHITE,
    "input.background": hexA(BLACK, 0.3),
    "input.border": BLACK,
    "input.placeholderForeground": "#bfccd680",
    "inputOption.activeBorder": BLUE2,
    "inputValidation.errorBorder": RED3,
    "inputValidation.infoBorder": BLUE3,
    "inputValidation.warningBorder": ORANGE3,
    "activityBar.background": DARK_GRAY4,
    "activityBar.border": BLACK,
    "sideBar.background": DARK_GRAY1,
    "sideBar.border": BLACK,
    "sideBarSectionHeader.background": DARK_GRAY2,
    "editorGroupHeader.tabsBackground": DARK_GRAY1,
    "tab.inactiveBackground": DARK_GRAY2,
    "tab.activeBackground": DARK_GRAY3,
    "tab.activeBorder": BLUE3,
    "tab.border": BLACK,
    "editorGroupHeader.tabsBorder": BLACK,
    "list.activeSelectionForeground": WHITE,
    "list.activeSelectionBackground": BLUE1,
    "list.hoverBackground": DARK_GRAY2,
    "list.inactiveSelectionBackground": hexA(BLUE1, 0.3),
};

function hexA(hex: string, alpha: number) {
    return hex + Math.round(alpha * 255).toString(16);
}
