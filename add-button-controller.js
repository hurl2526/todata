document.querySelector(".add-todo").addEventListener('click', function(){
  const stuffWritten = document.querySelector(".todo-input").value;
  const priorityValue = document.querySelector(".priority").value;
  let obj = {} 
  obj.text = stuffWritten
  obj.priority = priorityValue
  obj.complete = false
  obj.id = todos.length

  addTodo(obj);
  printTodo(obj)
})