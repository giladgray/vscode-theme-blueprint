#! /usr/local/bin/node

const fs = require("fs");
const COLORS = require("./colors");
// split file into lines
const lines = fs.readFileSync("./theme.template", "utf-8").split("\r\n")
    .map((line) => {
        // replace each color in each line #bruteforce
        Object.keys(COLORS).forEach((color) => line = line.replace(color, COLORS[color]));
        return line;
    });
fs.writeFileSync("themes/Blueprint.tmTheme", lines.join("\n"));