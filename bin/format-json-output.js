#!/usr/bin/env node

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on("line", (line) => {
    const match = line.match(/{.*}/);
    if (!match) {
        console.log(line); // pass through non-JSON
        return;
    }

    try {
        const json = JSON.parse(match[0]);
        console.log(JSON.stringify(json, null, 2)); // pretty-print JSON
    } catch (e) {
        console.log(line); // pass through if it's not valid JSON
    }
});
