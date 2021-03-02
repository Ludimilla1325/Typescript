import express, {Request, Response, NextFunction} from 'express';
import {json} from 'body-parser'; //this is a middleware

import todoRoutes from './routes/todos';

const app = express();

app.use(json()); //will parse the body of all incoming requests and extrect any jason data

app.use('/todos', todoRoutes);

//Middleware function - err handling middleware function
app.use((err: Error,req: Request,res: Response, next: NextFunction) =>{
    res.status(500).json({message:err.message});
});

app.listen(3000);