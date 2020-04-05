const togglePriority = document.querySelector('.toggle-priorities').addEventListener('click', function(){ 
  const togglePriorityButton = document.querySelector('.toggle-priorities')
    if (togglePriorityButton.innerText === 'Show Priorities') {
      currentTodos = namesAndPriorities(currentTodos)
      togglePriorityButton.innerText = 'Hide Priorities';
    } else if (togglePriorityButton.innerText ==='Hide Priorities'){
        currentTodos = originalList(currentTodos);
        togglePriorityButton.innerText = 'Show Priorities';
    }
    refreshTodos(currentTodos)
  })