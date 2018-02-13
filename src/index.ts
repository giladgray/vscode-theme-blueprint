import { writeFileSync } from "fs";
import { build } from "plist";

import * as Scopes from "./scopes";
import settings from "./settings";
import colors from "./uiColors";

interface IRule {
    name?: string;
    scope: string;
    settings: {
        background?: string;
        fontStyle?: string;
        foreground?: string;
    };
    onChange?: (ref: HTMLElement) => any;
}

const foregrounds = Object.keys(Scopes.foregrounds).map<IRule>(foreground => ({
    scope: Scopes.foregrounds[foreground].join(", "),
    settings: { foreground },
}));

const fontStyles = Object.keys(Scopes.fontStyles).map<IRule>(fontStyle => ({
    scope: Scopes.fontStyles[fontStyle].join(", "),
    settings: { fontStyle },
}));

const document = {
    name: "Blueprint",
    type: "dark",
    colors,
    settings: [{ settings }, ...foregrounds, ...fontStyles],
};

writeFileSync("themes/Blueprint.tmTheme", build(document));
console.log("DONE");
