"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser"); //this is a middleware
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(body_parser_1.json()); //will parse the body of all incoming requests and extrect any jason data
app.use('/todos', todos_1.default);
//Middleware function - err handling middleware function
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
