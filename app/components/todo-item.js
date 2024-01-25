// app/components/todo-item.js
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TodoItemComponent extends Component {
  @action
  deleteTodo() {
    this.args.todo.destroyRecord();
  }
}
