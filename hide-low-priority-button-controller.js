const lowPriorityButton = document.querySelector('.hide-low-priority').addEventListener('click', function(){
  priority2Only(todos)
  refreshTodos()
})