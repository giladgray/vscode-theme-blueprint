import { writeFileSync } from "fs";

import * as Scopes from "./scopes";
import settings from "./settings";
import colors from "./uiColors";

interface IRule {
    name?: string;
    scope: string[];
    settings: {
        background?: string;
        fontStyle?: string;
        foreground?: string;
    };
}

const foregrounds = Object.keys(Scopes.foregrounds).map<IRule>(foreground => ({
    scope: Scopes.foregrounds[foreground],
    settings: { foreground },
}));

const fontStyles = Object.keys(Scopes.fontStyles).map<IRule>(fontStyle => ({
    scope: Scopes.fontStyles[fontStyle],
    settings: { fontStyle },
}));

const themeJson = {
    name: "Blueprint",
    type: "dark",
    colors,
    settings: [{ settings }, ...foregrounds, ...fontStyles],
};

writeFileSync("themes/Blueprint-theme.json", JSON.stringify(themeJson, null, 2));
console.log("DONE");
