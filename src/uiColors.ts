import { COMMENT, PUNCTUATION, TEXT } from "./aliases";
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
    DARK_GRAY5,
    FOREST1,
    GRAY3,
    GREEN4,
    INDIGO1,
    INDIGO3,
    INDIGO4,
    ORANGE3,
    ORANGE4,
    RED3,
    RED4,
    TURQUOISE4,
    WHITE,
} from "./colors";

/** Set alpha channel of 6-digit hex string. */
const hexA = (hex: string, alpha: number) => hex + Math.round(alpha * 255).toString(16);
/** Color with some alpha, suitable for background use. */
const bg = (hex: string) => hexA(hex, 0.3);
/** Color with less alpha, suitable for _emphasized_ background use. */
const bgBright = (hex: string) => hexA(hex, 0.6);

// background colors
const BACKGROUND = DARK_GRAY1;
const BACKGROUND_LIGHT = DARK_GRAY2;
const BACKGROUND_BRIGHT = DARK_GRAY3;

// primary color, used for focus and selection
const PRIMARY_DARK = BLUE1;
const PRIMARY = BLUE3;
const PRIMARY_LIGHT = BLUE4;

// border colors
const BORDER = DARK_GRAY4;
const BORDER_DARK = DARK_GRAY3;
const DIVIDER_BLACK = bg(BLACK);

export default {
    // Base Colors
    // Overall border color for focused elements. This color is only used if not overridden by a component.
    focusBorder: BLUE2,
    // Overall foreground color. This color is only used if not overridden by a component.
    foreground: TEXT,
    // Shadow color of widgets such as Find/Replace inside the editor.
    "widget.shadow": BLACK,
    // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
    "selection.background": BLUE4,
    // Foreground color for description text providing additional information, for example for a label.
    descriptionForeground: TEXT,
    // Overall foreground color for error messages (this color is only used if not overridden by a component).
    errorForeground: RED3,

    "badge.background": PRIMARY,
    // button
    "button.background": PRIMARY,
    "button.foreground": WHITE,
    "button.hoverBackground": PRIMARY_LIGHT,
    // input
    "input.background": DIVIDER_BLACK,
    "input.border": BORDER,
    "input.placeholderForeground": "#bfccd680",
    "inputOption.activeBorder": PRIMARY_LIGHT,
    "inputValidation.errorBorder": RED3,
    "inputValidation.infoBorder": PRIMARY,
    "inputValidation.warningBorder": ORANGE3,
    // lists/trees
    "list.activeSelectionForeground": WHITE,
    "list.activeSelectionBackground": BLUE1,
    "list.hoverBackground": DARK_GRAY2,
    "list.inactiveSelectionBackground": bg(PRIMARY_DARK),
    // scrollbar
    "scrollbar.shadow": BLACK,
    "scrollbarSlider.background": hexA(COMMENT, 0.2),
    "scrollbarSlider.hoverBackground": hexA(COMMENT, 0.4),
    "scrollbarSlider.activeBackground": hexA(COMMENT, 0.6),

    // activity bar (far left)
    "activityBar.background": BACKGROUND_BRIGHT,
    // "activityBar.border": BORDER,
    // sidebar (near left)
    "sideBar.background": BACKGROUND,
    "sideBar.border": BORDER,
    "sideBarSectionHeader.background": BACKGROUND_LIGHT,
    // tabs (up top)
    "editorGroupHeader.tabsBackground": BACKGROUND,
    "tab.inactiveBackground": BACKGROUND_LIGHT,
    "tab.activeBackground": BACKGROUND_BRIGHT,
    "tab.activeBorder": PRIMARY,
    "tab.border": BORDER,
    "editorGroupHeader.tabsBorder": BORDER,
    // panels (bottom)
    "panel.border": BORDER,
    "panelTitle.activeBorder": PRIMARY,

    // editor
    "editor.background": BACKGROUND,
    "editor.lineHighlightBackground": BACKGROUND_LIGHT,
    "editor.selectionBackground": bgBright(PRIMARY),
    "editor.selectionHighlightBackground": bg(PRIMARY),
    "editorIndentGuide.background": BORDER_DARK,
    "editorRuler.foreground": BORDER_DARK,
    "editorCursor.foreground": PUNCTUATION,
    "editorLineNumber.foreground": DARK_GRAY5,
    "editorLink.activeForeground": PRIMARY_LIGHT,

    // Find matches: orange
    // Color of the current search match.
    "editor.findMatchBackground": FOREST1,
    // Color of the other search matches. The color must not be opaque to not hide underlying decorations.
    "editor.findMatchHighlightBackground": bg(FOREST1),
    // Background color of editor widgets, such as Find/Replace.
    "editorWidget.background": BLACK,
    "editorWidget.border": bgBright(FOREST1),

    // Suggestions: indigo
    // Background color of the suggestion widget.
    "editorSuggestWidget.background": BLACK,
    // Border color of the suggestion widget.
    "editorSuggestWidget.border": INDIGO1,
    // Color of the match highlights in the suggestion widget.
    "editorSuggestWidget.highlightForeground": INDIGO3,
    // Background color of the selected entry in the suggestion widget.
    "editorSuggestWidget.selectedBackground": bg(PRIMARY_DARK),

    // Background of hovered word, and border of hover tooltip
    "editor.hoverHighlightBackground": DARK_GRAY5,
    "editorHoverWidget.border": DARK_GRAY5,

    // Color for matching brackets boxes.
    "editorBracketMatch.border": PRIMARY,

    // Git Colors
    // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
    "editorOverviewRuler.addedForeground": GREEN4,
    // Overview ruler marker color for deleted content.
    "editorOverviewRuler.deletedForeground": RED4,
    // Overview ruler marker color for errors.
    "editorOverviewRuler.errorForeground": RED3,
    // Overview ruler marker color for warnings.
    "editorOverviewRuler.warningForeground": ORANGE4,
    // Overview ruler marker color for infos.
    "editorOverviewRuler.infoForeground": TURQUOISE4,

    // Editor gutter background color for lines that are modified.
    "editorGutter.modifiedBackground": ORANGE4,
    // Editor gutter background color for lines that are added.
    "editorGutter.addedBackground": GREEN4,
    // Editor gutter background color for lines that are deleted.
    "editorGutter.deletedBackground": RED4,
    // Color for modified git resources. Used file labels and the SCM viewlet.
    "gitDecoration.modifiedResourceForeground": ORANGE4,
    // Color for deleted git resources. Used file labels and the SCM viewlet.
    "gitDecoration.deletedResourceForeground": RED4,
    // Color for untracked git resources. Used file labels and the SCM viewlet.
    "gitDecoration.untrackedResourceForeground": GREEN4,
    // Color for ignored git resources. Used file labels and the SCM viewlet.
    "gitDecoration.ignoredResourceForeground": GRAY3,
    // Color for conflicting git resources. Used file labels and the SCM viewlet.
    "gitDecoration.conflictingResourceForeground": INDIGO4,
};
