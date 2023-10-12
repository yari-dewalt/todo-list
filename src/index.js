import { createItem } from "./todos.js"
import { updateTodoList } from "./todos.js";
// import { createForm } from "./form.js";

let todo_list = [];

const addButton = document.getElementById("add-todo");
const content = document.getElementById("content");

addButton.addEventListener("click", () => {
    createForm();
    content.removeChild(addButton);
})

function createForm() {
    let form = document.createElement("form");

    let title_input = document.createElement("input");
    title_input.className = "title";
    title_input.placeholder = "Title";
    title_input.required = true;

    let description_input = document.createElement("input");
    description_input.className = "description";

    let submit_button = document.createElement("button");
    submit_button.type = "submit";
    submit_button.className = "submit";
    submit_button.innerHTML = "Add";

    let cancel_button = document.createElement("button");
    cancel_button.type = "button";
    cancel_button.className = "cancel";
    cancel_button.innerHTML = "Cancel";

    form.appendChild(title_input);
    form.appendChild(description_input);
    form.appendChild(submit_button);
    form.appendChild(cancel_button);

    content.appendChild(form);

    form.addEventListener("submit", (event) => {
        let new_todo = createItem(title_input.value, description_input.value, "duedate", "high");
        todo_list.push(new_todo);
        updateTodoList(todo_list, addButton);
        console.log(todo_list);
        event.preventDefault();
    })

    cancel_button.addEventListener("click", () => {
        content.removeChild(form);
        content.appendChild(addButton);
    })
}