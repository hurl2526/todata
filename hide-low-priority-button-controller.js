const lowPriorityButton = document.querySelector('.hide-low-priority').addEventListener('click', function(){
  const lowPriorityButton = document.querySelector('.hide-low-priority')
    if(lowPriorityButton.innerText === 'Hide Low Priority'){
      currentTodos = priority2Only(currentTodos)
      lowPriorityButton.innerText ='Show Low Priority'
    }
    else if(lowPriorityButton.innerText === 'Show Low Priority'){
      currentTodos = todos.slice()
      lowPriorityButton.innerText ='Hide Low Priority'
    }
    
    refreshTodos(currentTodos)
})