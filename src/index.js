import { createItem } from "./todos.js"

let todo_list = [];

let todo1 = createItem("test_title", "test description blah", "10:00PM", "high");

todo_list.push(todo1);
console.log(todo1);

const addButton = document.getElementById("add-todo");

addButton.addEventListener("click", () => {
    let title = prompt("give title fam");
    let description = prompt("give description fam");
    let dueDate = prompt("give duedate fam");
    let priority = prompt("give priority fam");

    let new_todo = createItem(title, description, dueDate, priority);
    todo_list.push(new_todo);
    console.log(todo_list);
})