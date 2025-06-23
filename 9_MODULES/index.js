"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//file import 
//rode do node NOMEDOARQUIVO.js 
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
//multiple import
const multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
