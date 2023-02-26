// Файл для создания общих элементов отрисовки
// Создаём инпут, в аргумент передаём объект где ключ атрибут, а значение - текстовая составляющая атрибута
export function createInput (inputProps){
  const input = document.createElement('input');
  // Перебираем наш объект на ключи и присваиваем атрибуты
  for (const key in inputProps) {
    if (typeof inputProps[key] !== 'boolean' || inputProps[key]) {
      input.setAttribute(key,
        inputProps[key]);
    }
  }

  return input;
}
// Создаём кнопку, в атрибуты - текст внутри кнопки и вторым атрибутом - то же самое, что и в инпуте
export function createButton(title, buttonProps){
   const button = document.createElement('button');
  // Перебираем наш объект на ключи и присваиваем атрибуты
  for (const key in buttonProps) {
    if (typeof buttonProps[key] !== 'boolean' || buttonProps[key]) {
      button.setAttribute(key,
        buttonProps[key]);
    }
  }
  button.textContent = title

  return button;
}
  
export function createTable(tableName, tableHeadNames){
    const table = document.createElement('table')
    table.classList.add(tableName);

    const tableHead = document.createElement('thead')
    const tr = document.createElement('tr')
    for (let key of tableHeadNames){
      const th = document.createElement('th');
      th.textContent = key;
      // if(th.textContent === 'Task name'){
      //   th.classList.add('task_name')
      // }
      tr.append(th)
    }
    const tableBody = document.createElement('tbody')

    tableHead.append(tr);
    table.append(tableHead, tableBody)
    return table
  }