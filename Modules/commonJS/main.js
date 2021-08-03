//ES5 has two non-compatible module systems, which are as follows: 1. CommonJS: This is the dominant standard as Node.js adopted it and 2. AMD (Asynchronous Module Definition): This is slightly more complicated than CommonJS and disigned for asynchronous module loading, and targeted toward browsers.

const ui = require("./ui");

ui.print(); //print!