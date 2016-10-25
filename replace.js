#! /usr/local/bin/node

var fs = require("fs");
var COLORS = require("./colors");

// replace each variable with corresponding color
var contents = fs.readFileSync("./theme.template", "utf-8")
    .replace(/@[\w-]+\d?/g, (match) => COLORS[match]);
fs.writeFileSync("themes/Blueprint.tmTheme", contents);

console.log("OK");
