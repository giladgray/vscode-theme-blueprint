import * as Aliases from "./aliases";
import * as Colors from "./colors";

/** Editor-level settings for VSCode */
export default {
    background: Aliases.BACKGROUND,
    caret: Aliases.PUNCTUATION,
    foreground: Aliases.TEXT,
    invisibles: Aliases.INVISIBLES,

    lineHighlight: Aliases.HIGHLIGHT,
    selection: Aliases.SELECTION,
    findHighlight: "#FFE792",
    findHighlightForeground: Colors.BLACK,
    selectionBorder: "#222218",
    activeGuide: "#9D550FB0",

    bracketsForeground: Colors.BLUE5,
    bracketsOptions: "underline",

    bracketContentsForeground: Colors.BLUE5,
    bracketContentsOptions: "underline",

    tagsOptions: "stippled_underline",
};
