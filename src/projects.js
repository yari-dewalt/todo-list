import { selectProject } from ".";

function createProject(name) {
    const project = {
        "name": name,
        "list": [],
        "active": false
    }

    return project;
}

function updateProjectList(project_list, addButton) {
    while (projects.firstChild) {
        projects.removeChild(projects.lastChild);
    }

    project_list.forEach((project) => {
        let div = document.createElement("div");
        div.setAttribute("class", "project");

        let name = document.createElement("h3");
        name.textContent = project.name;
        name.className = "project-name";

        name.addEventListener("click", () => {
            selectProject(project);
        })

        let remove_button = document.createElement("button");
        remove_button.innerHTML = "X";
        remove_button.className = "remove_button";

        remove_button.addEventListener("click", () => {
            removeProject(project_list, project);
            updateProjectList(project_list, addButton);
        })

        if (project.active == true) {
            div.className = "project active";
        }

        div.appendChild(name);
        div.appendChild(remove_button);
    
        projects.appendChild(div);
    })

    projects.appendChild(addButton);
}

function removeProject(project_list, project) {
    project_list.splice(project_list.indexOf(project), 1);
}

export { createProject };
export { updateProjectList };