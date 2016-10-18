#! /usr/local/bin/node

const fs = require("fs");
const COLORS = require("./colors");

// replace each variable with corresponding color
const contents = fs.readFileSync("./theme.template", "utf-8")
    .replace(/@[\w-]+\d?/g, (match) => COLORS[match]);
fs.writeFileSync("themes/Blueprint.tmTheme", contents);
console.log("OK");