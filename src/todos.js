function createItem(title, description, dueDate, priority) {
    const todo = {
        "title": title,
        "description": description,
        "dueDate": dueDate,
        "priority": priority
    }

    return todo;
}

export { createItem };