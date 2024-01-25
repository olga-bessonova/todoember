// app/controllers/todos.js
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TodosController extends Controller {
  @action
  addTodo(title) {
    const newTodo = this.store.createRecord('todo', { title });
    newTodo.save();
  }

  @action
  deleteTodo(todo) {
    todo.destroyRecord();
  }
}
