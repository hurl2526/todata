const hideCompletedStuff = document.querySelector('.hide-complete').addEventListener('click', function(){
  const hideCompletedStuff = document.querySelector('.hide-complete')
    if(hideCompletedStuff.innerText === 'Hide Complete'){
      currentTodos = justNotComplete(currentTodos)
      hideCompletedStuff.innerText ='Show Complete'
    }
    else if(hideCompletedStuff.innerText === 'Show Complete'){
      currentTodos = todos.slice()
      hideCompletedStuff.innerText ='Hide Complete'
    }
    
    refreshTodos()
});
