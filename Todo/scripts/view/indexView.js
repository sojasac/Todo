// Файл отрисовки
import {TaskForm} from './formView.js';
import {TaskList} from './listView.js';


// Собираем нашу отрисовку с ивентами
export class TodoView {
  constructor({onTaskAdd}){
    this.newTaskForm = new TaskForm(onTaskAdd)
    this.newTaskList = new TaskList();
    this.list = this.newTaskList.list
    this.listItem = this.newTaskList.listItem

    const form = document.getElementById('todo_app');
    form.append(this.newTaskForm.form, this.list)
  }
}