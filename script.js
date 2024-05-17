function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList").children;

  for (var i = 0; i < taskList.length; i++) {
    var taskText = taskList[i].getElementsByClassName("task-text")[0];
    if (taskText.textContent === "Task " + (i + 1)) {
      taskText.textContent = taskInput.value;
      taskInput.value = "";
      break;
    }
  }
}

function deleteTask(button) {
  var taskItem = button.parentElement;
  var taskText = taskItem.getElementsByClassName("task-text")[0];
  taskText.textContent =
    "Task " +
    (Array.prototype.indexOf.call(taskItem.parentNode.children, taskItem) + 1);
  taskItem.getElementsByClassName("task-checkbox")[0].checked = false;
}
