import Task from './Task';
import Project from './Project';
import ToDoList from './ToDoList';
import Storage from './Storage';

export default class UI {
  static loadHomepage() {
    UI.initButtons();
  }

  static initButtons() {
    UI.handleAddProjectPopup();
  }

  static addProject() {

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
      const projectName = document.getElementById('project-name');
      const project = new Project(projectName.value);
      console.log(project);
      Storage.addProject(project);
      console.log(Storage.getToDoList());
      addProjectPopup.classList.remove('active');
    });

    cancelProjectButton.addEventListener('click', () => {
      addProjectPopup.classList.remove('active');
      projectName.value = '';
    });
  }
}
