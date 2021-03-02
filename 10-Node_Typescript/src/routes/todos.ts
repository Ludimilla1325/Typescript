import { Router } from 'express';

import {createTodo, getTodos, updateTodo, deleteTodo} from '../controllers/todos';

const router = Router();

// Post request- to add a new todo
router.post('/', createTodo);

//Get the todo
router.get('/', getTodos);

// To update the todo
router.patch('/:id', updateTodo);


router.delete('/:id', deleteTodo);

export default router;