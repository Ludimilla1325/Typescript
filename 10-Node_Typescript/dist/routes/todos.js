"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// Post request- to add a new todo
router.post('/');
//Get the todo
router.get('/');
// To update the todo
router.patch('/:id');
router.delete('/:id');
exports.default = router;
