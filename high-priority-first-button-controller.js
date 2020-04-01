const highPriorityButton = document.querySelector('.high-priority-first').addEventListener('click', function(){
  priority2First(todos)
  refreshTodos()
})