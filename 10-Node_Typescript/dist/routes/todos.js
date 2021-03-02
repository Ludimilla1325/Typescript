"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = express_1.Router();
// Post request- to add a new todo
router.post('/', todos_1.createTodo);
//Get the todo
router.get('/', todos_1.getTodos);
// To update the todo
router.patch('/:id', todos_1.updateTodo);
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
