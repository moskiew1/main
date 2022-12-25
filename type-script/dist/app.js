/*<li>
<label for="tasks-1">Wyrzucić śmieci</label>
<input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
</li> */
var tasksContainerElement = document.querySelector(".tasks");
var addButtonElement = document.querySelector("button");
var taskNameInputElement = document.querySelector("#name");
var tasks = [{
        name: "wyrzucić śmieci",
        done: false
    }];
var render = function () {
    tasksContainerElement.innerHTML = "";
    tasks.forEach(function (task, index) {
        var taskElement = document.createElement("li");
        var id = "task-".concat(index);
        var labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        var checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
var addTask = function (taskName) {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", function (event) {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
