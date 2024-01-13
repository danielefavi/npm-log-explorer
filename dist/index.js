#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const child_process_1 = __importDefault(require("child_process"));
const helpers_1 = require("./libs/helpers");
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
app.use('/api', api_1.default);
app.get('/', (req, res) => {
    // return the views/index.html
    res.sendFile('index.html', { root: __dirname + '/../views' });
});
let port = 4321;
if (process.argv.includes('--port')) {
    const inx = process.argv.indexOf('--port') + 1;
    port = (0, helpers_1.validateServerPort)(process.argv[inx]);
}
app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`Server started at ` + url);
    // opening the browser
    var start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
    child_process_1.default.exec(start + ' ' + url);
});
