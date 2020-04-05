const completelLastButton = document.querySelector('.complete-last').addEventListener('click' ,function() {
  const completelLastButton = document.querySelector('.complete-last')
    if (completelLastButton.innerText === 'Complete Last') {
        currentTodos = notCompleteFirst(todos.slice())
        completelLastButton.innerText = 'Original Order';
    } else if (completelLastButton.innerText ==='Original Order'){
        currentTodos = todos.slice();
        completelLastButton.innerText = 'Complete Last';
    }
    refreshTodos()
    });