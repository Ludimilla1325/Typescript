import { Router } from 'express';

const router = Router();

// Post request- to add a new todo
router.post('/');

//Get the todo
router.get('/');

// To update the todo
router.patch('/:id');

router.delete('/:id');

export default router;