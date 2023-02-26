import {createTable} from './genFunc.js';
import {names} from '../consts.js';

function createListTasks(){
  const table = createTable('content_tasks', names.tableHeadName)
  return table
}

export class TaskList {
  constructor(){
    this.list = createListTasks();
    this.listItem = function createListTasksItem({id, status, text}) {
      const tr = document.createElement('tr');
    tr.classList.add('task_row');
    tr.id = id
    if(status === 'Complete'){
    tr.classList.add('complete')
    tr.innerHTML = `
    <td class="task_name">${text}</td>
    <td>${status}</td>
    <td class="actionTd">
      <button id="delete" class="delete" type="button" data-row-id="${id}">Delete</button>
      <button id="toCurrent" class="toCurrent" type="button" data-row-id="${id}">Remove to Current</button>
    </td>`
    } 
    else {tr.innerHTML = `
    <td class="task_name">${text}</td>
    <td>${status}</td>
    <td>
      <button id="delete" class="delete" type="button" data-row-id="${id}">Delete</button>
      <button type="button" name="task_check" id="task_check"  data-row-id="${id}">Complete</button>
    </td>`
  }
    return tr
    };
  }
  
}