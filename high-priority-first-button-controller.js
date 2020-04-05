const highPriorityButton = document.querySelector('.high-priority-first').addEventListener('click', function(){
  const highPriorityButton = document.querySelector('.high-priority-first')
  if (highPriorityButton.innerText === 'High Priority First') {
    currentTodos = priority2First(currentTodos)
    highPriorityButton.innerText = 'Original Order';
  } else if (highPriorityButton.innerText ==='Original Order'){
    currentTodos = todos.slice()
    highPriorityButton.innerText = 'High Priority First';
  }
  refreshTodos()
})