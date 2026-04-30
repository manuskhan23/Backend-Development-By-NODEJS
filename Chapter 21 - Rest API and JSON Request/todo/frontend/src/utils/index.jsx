const coreURL = "http://localhost:3003";

const addTodoURL = `${coreURL}/api/createtodos`;
const getAllTodosURL = `${coreURL}/api/showtodos`;
const markTodoAsCompleteURL = `${coreURL}/api/completetodos/:id/complete`;
const deleteTodoURL = `${coreURL}/api/deletetodos/:id`;
const updateTodoURL = `${coreURL}/api/updatetodos/:id`;

export {
  addTodoURL,
  getAllTodosURL,
  markTodoAsCompleteURL,
  deleteTodoURL,
  updateTodoURL,
};