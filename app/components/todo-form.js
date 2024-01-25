import Component from '@glimmer/component';

export default class TodoFormComponent extends Component {
  newTitle = '';
  
  addTodo() {
    const title = this.newTitle.trim();
    if (title) {
      this.args.addTodo(title);
      this.newTitle = '';
    }
  }
}