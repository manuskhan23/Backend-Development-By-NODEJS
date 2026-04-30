// External Module
const express = require("express");
const todoItemsRouter = express.Router();

// Local Module
const todoitemcontroller = require("../controllers/newtodoitemscontroller.js");

todoItemsRouter.post('/api/createtodos',todoitemcontroller.createTodoItem);
todoItemsRouter.get('/api/showtodos',todoitemcontroller.getTodoItems);
todoItemsRouter.patch('/api/completetodos/:id/complete',todoitemcontroller.markTodoItemAsComplete);
todoItemsRouter.delete('/api/deletetodos/:id',todoitemcontroller.deleteTodoItem);
todoItemsRouter.put('/api/updatetodos/:id',todoitemcontroller.updateTodoItem);

module.exports = todoItemsRouter;
