import { createItem } from "./todos.js"
import { updateTodoList } from "./todos.js";

let todo_list = [];

const addButton = document.getElementById("add-todo");
const content = document.getElementById("content");

addButton.addEventListener("click", () => {
    // let title = prompt("give title fam");
    // let description = prompt("give description fam");
    // let dueDate = prompt("give duedate fam");
    // let priority = prompt("give priority fam");

    createForm();
    content.removeChild(addButton);

    // let new_todo = createItem(title, description, dueDate, priority);
    // todo_list.push(new_todo);

    // updateTodoList(content, todo_list);
})

function createForm() {
    let form = document.createElement("form");
    let title_input = document.createElement("input");
    let description_input = document.createElement("input");
    let dueDate_input = document.createElement("input");
    let submit_button = document.createElement("button");
    submit_button.setAttribute("type", "submit");
    let cancel_button = document.createElement("button");
    cancel_button.setAttribute("type", "button");

    form.appendChild(title_input);
    form.appendChild(description_input);
    form.appendChild(dueDate_input);
    form.appendChild(submit_button);
    form.appendChild(cancel_button);

    content.appendChild(form);

    form.addEventListener("submit", (event) => {
        let new_todo = createItem(title_input.value, description_input.value, dueDate_input.value, "high");
        todo_list.push(new_todo);
        updateTodoList(content, todo_list, addButton);
        console.log(todo_list);
        event.preventDefault();
    })
}