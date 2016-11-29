import { writeFileSync } from "fs";
import { build } from "plist";

import settings from "./settings";
import SCOPES from "./scopes";

interface Rule {
    name?: string;
    scope: string;
    settings: {
        background?: string;
        fontStyle?: string;
        foreground: string;
    }
}

const scopeRules = Object.keys(SCOPES).map<Rule>((foreground) => ({
    scope: SCOPES[foreground].join(", "),
    settings: { foreground },
}));

const document = {
    name: "Blueprint",
    settings: [
        { settings },
        ...scopeRules
    ],
    uuid: "D8D5E82E-3D5B-46B5-B38E-8C841C21347D",
};

writeFileSync("themes/Blueprint.tmTheme", build(document));
console.log("DONE");
