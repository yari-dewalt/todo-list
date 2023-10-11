function createItem(title, description, dueDate, priority) {
    const todo = {
        "title": title,
        "description": description,
        "dueDate": dueDate,
        "priority": priority
    }

    return todo;
}

function updateTodoList(container, todo_list, addButton) {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    todo_list.forEach((todo) => {
        let div = document.createElement("div");
        div.setAttribute("class", "todo");

        let title = document.createElement("h3");
        title.textContent = todo.title;

        let description = document.createElement("p");
        description.textContent = todo.description;

        div.appendChild(title);
        div.appendChild(description);
    
        content.appendChild(div);
    })

    content.appendChild(addButton);
}

export { createItem };
export { updateTodoList };