const taskInput = document.getElementById("task-input");

const saveTaskBtn = document.getElementById("save-task-btn");

const taskList = document.getElementById("task-list");

async function fetchTasks(){
    const response = await fetch(
        "http://localhost:3000/api/tasks"
    );
    const result = await response.json();
    console.log(result.data);
    console.log(result.data[0].title);

    console.log(result);

}
fetchTasks();