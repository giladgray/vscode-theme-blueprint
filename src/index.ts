import { writeFileSync } from "fs";
import { build } from "plist";

import SCOPES from "./scopes";
import settings from "./settings";

interface IRule {
    name?: string;
    scope: string;
    settings: {
        background?: string;
        fontStyle?: string;
        foreground: string;
    };
}

const scopeRules = Object.keys(SCOPES).map<IRule>((foreground) => ({
    scope: SCOPES[foreground].join(", "),
    settings: { foreground },
}));

const document = {
    name: "Blueprint",
    settings: [
        { settings },
        ...scopeRules,
    ],
};

writeFileSync("themes/Blueprint.tmTheme", build(document));
console.log("DONE");
