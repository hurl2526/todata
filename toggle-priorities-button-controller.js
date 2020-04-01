const togglePriority = document.querySelector('.toggle-priorities').addEventListener('click', function(){ 
  let priorityValue = document.querySelector(".priority").value;
  if (priorityValue === false){
    priorityValue = true
  } else {
    priorityValue = false
  }
  refreshTodos()
})