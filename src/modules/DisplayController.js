import Task from './Task';
import Project from './Project';

export default class UI {
  static loadHomepage() {
    UI.initButtons();
  }

  static initButtons() {
    UI.handleAddProjectPopup();
  }

  static handleAddProjectPopup() {
    const addProjectButton = document.getElementById('add-project-button');
    const addButton = document.getElementById('popup-add-button');
    const cancelProjectButton = document.getElementById('popup-cancel-button');
    const addProjectPopup = document.getElementById('add-project-popup');

    addProjectButton.addEventListener('click', () => {
      addProjectPopup.classList.add('active');
    });

    cancelProjectButton.addEventListener('click', () => {
      addProjectPopup.classList.remove('active');
    });
  }
}
