import { writeFileSync } from "fs";

import Aliases from "../common/aliases";
import SCOPES from "./scopes";

interface ISimpleCSS {
    [property: string]: string;
}

function stringifyCSS(selector: string, rules: ISimpleCSS, indent = "  ") {
    const cssString = Object.keys(rules)
        .map((property) => `${indent}${property}: ${rules[property]};`)
        .join("\n");
    return `${selector} {\n${cssString}\n}`;
}

const THEME_NAME = ".monaco-editor.blueprint";
const styles = new Map<string, ISimpleCSS>();

styles.set(THEME_NAME, { color: Aliases.TEXT });
styles.set(`${THEME_NAME} .monaco-editor-background`, { background: Aliases.BACKGROUND });
styles.set(`${THEME_NAME} .cursors-layer > .cursor`, { background: Aliases.PUNCTUATION });

Object.keys(SCOPES).forEach((foreground) => {
    const selector = SCOPES[foreground]
        .map((scope) => `${THEME_NAME} .token.${scope}`)
        .join(",\n");
    styles.set(selector, { color: foreground });
});

const styleStrings = Array.from(styles.entries())
    .map(([selector, css]) => stringifyCSS(selector, css));

writeFileSync("themes/blueprint-monaco.css", styleStrings.join("\n\n") + "\n");
console.log("DONE");
