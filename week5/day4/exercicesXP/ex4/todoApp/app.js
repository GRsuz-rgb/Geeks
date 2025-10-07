import { TodoList } from "./todo.js";

const myTodos = new TodoList();

myTodos.addTask("Learn Node.js");
myTodos.addTask("Do homework");
myTodos.addTask("Watch movie");

myTodos.completeTask("Do homework");

myTodos.listTasks();
