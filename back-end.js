/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function (todo) {
  return todo.text;
};

const getCompleteness = function (todo) {
  return todo.complete;
};

const getPriority = function (todo) {
  return todo.priority;
};

const isComplete = function (todo) {
  return todo.complete;
};

const isNotComplete = function (todo) {
  return !isComplete(todo);
};

const isHighPriority = function (todo) {
  return todo.priority === 2;
};

const isLowPriority = function (todo) {
  return todo.priority === 1;
};



/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const originalListHelper = function(todo) {
  todo.text = todo.text.slice(0,todo.text.indexOf('-'))
  return todo
}
const originalList = function(todos){
  return todos.map(originalListHelper)
}

const namesAndPrioritiesHelper = function(todo){
  if (todo.priority === 2) {
    todo.text = todo.text + ' - ' + 'High'
  } else if (todo.priority === 1) {
    todo.text = todo.text + ' - ' + 'Low'
  }
  return todo
}

const namesAndPriorities = function(todos){
  return todos.map(namesAndPrioritiesHelper)
}


const names = function (todos) {
  return todos.map(getTodoName);
};

const justNotComplete = function (todos) {
  return todos.filter(isNotComplete);
};

const justComplete = function (todos) {
  return todos.filter(isComplete);
};

const priority2Only = function (todos) {
  return todos.filter(isHighPriority);
};

const priority1Only = function (todos) {
  return todos.filter(isLowPriority);
};

const notCompleteFirstHelper = function (thing1, thing2) {
  if (getCompleteness(thing1) > getCompleteness(thing2)) {
    return 1;
  } else if (getCompleteness(thing1) < getCompleteness(thing2)) {
    return -1;
  } else {
    return 0;
  }
};
const notCompleteFirst = function (arr) {
  let newArr = arr.slice();
  return newArr.sort(notCompleteFirstHelper);
};
const priority2FirstHelper = function (thing1, thing2) {
  if (getPriority(thing1) > getPriority(thing2)) {
    return -1;
  } else if (getPriority(thing1) < getPriority(thing2)) {
    return 1;
  } else {
    return 0;
  }
};
const priority2First = function (arr) {
  let newArr = arr.slice();
  return newArr.sort(priority2FirstHelper);
};

if (typeof notCompleteFirst === 'undefined') {
  notCompleteFirst = undefined;
}

if (typeof priority2First === 'undefined') {
  priority2First = undefined;
}

module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
};