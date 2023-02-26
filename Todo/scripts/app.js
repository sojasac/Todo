import {TodoView} from './view/indexView.js'



export class TodoController {
  constructor(){
    this.view = new TodoView({
      onTaskAdd : this.createTaskRow
    })
  }
  createTaskRow = (newTask) => {
    const row = this.view.listItem(newTask)
    this.view.list.tBodies[0].append(row)
  }
  
}