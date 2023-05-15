import Task from './Task';
import Project from './Project';
import ToDoList from './ToDoList';
import Storage from './Storage';

export default class UI {
  static loadHomepage() {
    UI.initButtons();
    UI.displayProjects();
  }

  static initButtons() {
    UI.handleAddProjectPopup();
    UI.handleProjectClick();
  }

  static handleAddProjectPopup() {
    const addProjectButton = document.getElementById('add-project-button');
    const addButton = document.getElementById('popup-add-button');
    const cancelProjectButton = document.getElementById('popup-cancel-button');
    const addProjectPopup = document.getElementById('add-project-popup');
    const projectName = document.getElementById('project-name');

    addProjectButton.addEventListener('click', () => {
      projectName.value = '';
      addProjectPopup.classList.add('active');
    });

    addButton.addEventListener('click', () => {
      const project = new Project(projectName.value);

      console.log(project);

      if (project.name === '') {
        alert('Project name can\'t be empty');
        return;
      }

      if (Storage.getToDoList().contains(project)) {
        project.value = '';
        alert('Project names must be different');
        return;
      }

      Storage.addProject(project);
      UI.displayProjects();
      addProjectPopup.classList.remove('active');
    });

    cancelProjectButton.addEventListener('click', () => {
      addProjectPopup.classList.remove('active');
      projectName.value = '';
    });
  }

  static displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.textContent = '';
    const toDoList = Storage.getToDoList().getProjects();
    for (let i = 4; i < toDoList.length; i++) {
      const displayedProject = document.createElement('div');
      displayedProject.classList.add('project-name');
      displayedProject.innerHTML = `<p>
      <img src="../src/assets/project.png" alt="project icon">
      ${toDoList[i].name}
      <img src="../src/assets/delete.png" class="delete-button" alt="delete icon"></p>`;
      projectsList.append(displayedProject);
    }

    UI.handleProjectClick();
  }

  static handleProjectClick() {
    // display tasks here

    const deleteProjectButtons = document.querySelectorAll('.delete-button');

    deleteProjectButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const projectName = button.parentNode.childNodes[2].nodeValue.trim();
        console.log(projectName);
        console.log(Storage.getToDoList());
        Storage.deleteProject(projectName);
        console.log(Storage.getToDoList());
        UI.displayProjects();
      });
    });
  }
}
