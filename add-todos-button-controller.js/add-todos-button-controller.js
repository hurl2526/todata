const addButton = document.querySelector(".add-todo");
addButton.addEventListener('click', function(){
  let stuffWritten = document.querySelector(".todo-input").value;
  let priorityValue = document.querySelector(".priority").value;
  const obj = {} 
  console.log('hello')
  obj.text = stuffWritten
  obj.priority = priorityValue
  obj.complete = false
  obj.id = currentTodos[currentTodos.length-1].id +1
  addTodo(obj);
  refreshTodos()
})
