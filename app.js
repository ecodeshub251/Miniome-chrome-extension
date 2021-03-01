var mainbutton = document.querySelector('.main-icon');
var todoform = document.querySelector('.todo-form');
var icons = document.querySelectorAll('.icon');
mainbutton.addEventListener('click', function (e) {
    icons.forEach(function (icon) {
        icon.classList.toggle('invisible');
    });
});
todoform.addEventListener('submit', function (e) {
    e.preventDefault();
    var taskname = todoform['task'].value;
    addTask(taskname);
    todoform['task'].value = '';
});
getTasks();
function addTask(taskname) {
    var taskArray = getTasks();
    if (taskArray === null) {
        taskArray = [];
    }
    else {
        taskArray;
    }
    // taskArray.push(taskname)
    console.log(taskArray);
    // localStorage.setItem('task', JSON.stringify(taskname))
}
function getTasks() {
    return JSON.parse(localStorage.getItem('task'));
}
