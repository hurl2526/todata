const completelLastButton = document.querySelector('.complete-last').addEventListener('click' ,function() {
  notCompleteFirst(todos)
  refreshTodos()
})