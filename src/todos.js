function createItem(title, description, dueDate, priority) {
    const todo = {
        "title": title,
        "description": description,
        "dueDate": dueDate,
        "priority": priority
    }

    return todo;
}

function updateTodoList(todo_list, addButton) {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    todo_list.forEach((todo) => {
        let div = document.createElement("div");
        div.setAttribute("class", "todo");

        let title = document.createElement("h3");
        title.textContent = todo.title;
        title.className = "todo-title";

        let description = document.createElement("p");
        description.textContent = todo.description;
        description.className = "todo-description";

        let due_date = document.createElement("input");
        due_date.setAttribute("type", "datetime-local");
        due_date.className = "todo-duedate";

        let remove_button = document.createElement("button");
        remove_button.innerHTML = "X";
        remove_button.className = "remove_button";

        remove_button.addEventListener("click", () => {
            removeTodo(todo_list, todo, addButton);
            updateTodoList(todo_list, addButton);
        })

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(due_date);
        div.appendChild(remove_button);
    
        content.appendChild(div);
    })

    content.appendChild(addButton);
}

function removeTodo(todo_list, todo) {
    todo_list.splice(todo_list.indexOf(todo), 1);
}

export { createItem };
export { updateTodoList };