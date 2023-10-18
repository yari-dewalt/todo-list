function createItem(title, description, dueDate, priority) {
    const todo = {
        "title": title,
        "description": description,
        "dueDate": dueDate,
        "completed": false
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
        due_date.value = todo.dueDate;

        due_date.addEventListener("input", () => {
            todo.dueDate = due_date.value;
            updateTodoList(todo_list, addButton);
        })

        let complete_button = document.createElement("input");
        complete_button.type = "checkbox";
        complete_button.className = "complete_button";

        complete_button.addEventListener("change", (event) => {
            if (todo.completed == false) {
                todo.completed = true;
                updateTodoList(todo_list, addButton);
            }
            
            else if (todo.completed == true) {
                todo.completed = false;
                updateTodoList(todo_list, addButton);
            }
        })

        let remove_button = document.createElement("button");
        remove_button.innerHTML = "X";
        remove_button.className = "remove_button";

        remove_button.addEventListener("click", () => {
            removeTodo(todo_list, todo);
            updateTodoList(todo_list, addButton);
        })

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(due_date);
        div.appendChild(complete_button);
        div.appendChild(remove_button);

        if (todo.completed) {
            complete_button.checked = true;
            title.style.textDecoration = "line-through";
            description.style.textDecoration = "line-through";
        }
    
        content.appendChild(div);
    })

    content.appendChild(addButton);
}

function removeTodo(todo_list, todo) {
    todo_list.splice(todo_list.indexOf(todo), 1);
}

export { createItem };
export { updateTodoList };