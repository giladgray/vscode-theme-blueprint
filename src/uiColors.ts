import { COMMENT, PUNCTUATION, TEXT } from "./aliases";
import * as Colors from "./colors";

/** Set alpha channel of 6-digit hex string. */
const hexA = (hex: string, alpha: number) => hex + Math.round(alpha * 255).toString(16);
/** Color with some alpha, suitable for background use. */
const bg = (hex: string) => hexA(hex, 0.3);
/** Color with less alpha, suitable for _emphasized_ background use. */
const bgBright = (hex: string) => hexA(hex, 0.6);

// background colors
const BACKGROUND = Colors.DARK_GRAY1;
const BACKGROUND_LIGHT = Colors.DARK_GRAY2;
const BACKGROUND_BRIGHT = Colors.DARK_GRAY3;

// primary color, used for focus and selection
const PRIMARY_DARK = Colors.BLUE1;
const PRIMARY = Colors.BLUE3;
const PRIMARY_LIGHT = Colors.BLUE4;

// other intents
const ERROR = Colors.RED3;
const WARNING = Colors.ORANGE3;

// diff colors
const ADDED = Colors.GREEN4;
const CHANGED = Colors.ORANGE4;
const REMOVED = Colors.RED4;
const MERGED = Colors.INDIGO4;

// editor states
const MATCH = Colors.FOREST1;
const HOVER = Colors.DARK_GRAY5;

// border colors
const BORDER = Colors.DARK_GRAY4;
const BORDER_DARK = Colors.DARK_GRAY3;
const DIVIDER_BLACK = bg(Colors.BLACK);

const { BLACK, WHITE } = Colors;

export default {
    // Base Colors
    // Overall border color for focused elements. This color is only used if not overridden by a component.
    focusBorder: Colors.BLUE2,
    // Overall foreground color. This color is only used if not overridden by a component.
    foreground: TEXT,
    // Shadow color of widgets such as Find/Replace inside the editor.
    "widget.shadow": BLACK,
    // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
    "selection.background": PRIMARY_LIGHT,
    // Foreground color for description text providing additional information, for example for a label.
    descriptionForeground: TEXT,
    // Overall foreground color for error messages (this color is only used if not overridden by a component).
    errorForeground: ERROR,

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
    "inputValidation.errorBorder": ERROR,
    "inputValidation.infoBorder": PRIMARY,
    "inputValidation.warningBorder": WARNING,
    // lists/trees
    "list.activeSelectionForeground": WHITE,
    "list.activeSelectionBackground": PRIMARY_DARK,
    "list.hoverBackground": BACKGROUND_LIGHT,
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
    "editorLineNumber.foreground": Colors.DARK_GRAY5,
    "editorLink.activeForeground": PRIMARY_LIGHT,

    // Find matches: orange
    // Color of the current search match.
    "editor.findMatchBackground": MATCH,
    // Color of the other search matches. The color must not be opaque to not hide underlying decorations.
    "editor.findMatchHighlightBackground": bg(MATCH),
    // Background color of editor widgets, such as Find/Replace.
    "editorWidget.background": BLACK,
    "editorWidget.border": bgBright(MATCH),

    // Suggestions: indigo
    // Background color of the suggestion widget.
    "editorSuggestWidget.background": BLACK,
    // Border color of the suggestion widget.
    "editorSuggestWidget.border": Colors.INDIGO1,
    // Color of the match highlights in the suggestion widget.
    "editorSuggestWidget.highlightForeground": Colors.INDIGO3,
    // Background color of the selected entry in the suggestion widget.
    "editorSuggestWidget.selectedBackground": bg(PRIMARY_DARK),

    // Background of hovered word, and border of hover tooltip
    "editor.hoverHighlightBackground": HOVER,
    "editorHoverWidget.border": HOVER,

    // Color for matching brackets boxes.
    "editorBracketMatch.border": PRIMARY,

    // Git Colors
    // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
    "editorOverviewRuler.addedForeground": ADDED,
    // Overview ruler marker color for deleted content.
    "editorOverviewRuler.deletedForeground": REMOVED,
    // Overview ruler marker color for errors.
    "editorOverviewRuler.errorForeground": ERROR,
    // Overview ruler marker color for warnings.
    "editorOverviewRuler.warningForeground": CHANGED,
    // Overview ruler marker color for infos.
    "editorOverviewRuler.infoForeground": PRIMARY,

    // Editor gutter background color for lines that are modified.
    "editorGutter.modifiedBackground": CHANGED,
    // Editor gutter background color for lines that are added.
    "editorGutter.addedBackground": ADDED,
    // Editor gutter background color for lines that are deleted.
    "editorGutter.deletedBackground": REMOVED,
    // Color for modified git resources. Used file labels and the SCM viewlet.
    "gitDecoration.modifiedResourceForeground": CHANGED,
    // Color for deleted git resources. Used file labels and the SCM viewlet.
    "gitDecoration.deletedResourceForeground": REMOVED,
    // Color for untracked git resources. Used file labels and the SCM viewlet.
    "gitDecoration.untrackedResourceForeground": ADDED,
    // Color for ignored git resources. Used file labels and the SCM viewlet.
    "gitDecoration.ignoredResourceForeground": Colors.GRAY3,
    // Color for conflicting git resources. Used file labels and the SCM viewlet.
    "gitDecoration.conflictingResourceForeground": MERGED,
};
