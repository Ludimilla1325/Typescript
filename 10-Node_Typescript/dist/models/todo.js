"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
// blueprint of todos in controllers, how it should look like,automatically a class acts as a typr
class Todo {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}
exports.Todo = Todo;
