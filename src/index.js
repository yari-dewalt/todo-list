import { createProject } from "./projects.js";
import { updateProjectList } from "./projects.js";
import { createItem } from "./todos.js"
import { updateTodoList } from "./todos.js";

let project_list = [];

const addButton = document.getElementById("add-todo");
const addProject = document.getElementById("add-project");
const projects = document.getElementById("projects");
const content = document.getElementById("content");

let selectedProject = createProject("Default");

addProject.addEventListener("click", () => {
    createProjectForm();
    projects.removeChild(addProject);
})

addButton.addEventListener("click", () => {
    createForm();
    content.removeChild(addButton);
})

function createProjectForm() {
    let form = document.createElement("form");

    let name_input = document.createElement("input");
    name_input.className = "name";
    name_input.required = true;

    let submit_button = document.createElement("button");
    submit_button.type = "submit";
    submit_button.className = "submit";
    submit_button.innerHTML = "Add";

    let cancel_button = document.createElement("button");
    cancel_button.type = "button";
    cancel_button.className = "cancel";
    cancel_button.innerHTML = "Cancel";

    form.appendChild(name_input);
    form.appendChild(submit_button);
    form.appendChild(cancel_button);

    projects.appendChild(form);

    form.addEventListener("submit", (event) => {
        let new_project = createProject(name_input.value);
        project_list.push(new_project);
        selectProject(new_project);
        event.preventDefault();
    })
    
    cancel_button.addEventListener("click", () => {
        projects.removeChild(form);
        projects.appendChild(addProject);
    })
}

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
        let new_todo = createItem(title_input.value, description_input.value, "duedate", false);
        selectedProject.list.push(new_todo);
        updateTodoList(selectedProject.name, selectedProject.list, addButton);
        event.preventDefault();
    })

    cancel_button.addEventListener("click", () => {
        content.removeChild(form);
        content.appendChild(addButton);
    })
}

function selectProject(project) {
    selectedProject = project;

    project_list.forEach(project => {
        project.active = false;
    })

    selectedProject.active = true;
    updateProjectList(project_list, addProject);
    updateTodoList(selectedProject.name, selectedProject.list, addButton);
}

export { selectProject };