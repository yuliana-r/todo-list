/* eslint-disable no-alert */
import Task from './Task';
import Project from './Project';
import ToDoList from './ToDoList';
import Storage from './Storage';

export default class UI {
  static loadHomepage() {
    UI.initButtons();
    UI.displayProjects();
    UI.displayTasks();
  }

  static initButtons() {
    UI.handleAddProjectPopup();
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

      if (project.name === '') {
        alert('Project name can\'t be empty');
        return;
      }

      if (Storage.getToDoList().contains(project.name)) {
        projectName.value = '';
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

  static handleAddTaskPopup() {
    const addTaskButton = document.getElementById('add-task-button');
    const addButton = document.getElementById('popup-add-task-button');
    const cancelTaskButton = document.getElementById('popup-cancel-task-button');
    const addTaskPopup = document.getElementById('add-task-popup');
    const taskName = document.getElementById('task-name');

    addTaskButton.addEventListener('click', () => {
      taskName.value = '';
      addTaskPopup.classList.add('active');
    });

    addButton.addEventListener('click', () => {
      const project = document.querySelector('#project-preview h3').textContent;
      const task = new Task(taskName.value);

      if (task.name === '') {
        alert('Task name can\'t be empty');
        return;
      }

      if (Storage.getToDoList().getProject(project).contains(task.name)) {
        taskName.value = '';
        alert('Task names must be different');
        return;
      }

      Storage.addTask(project, task);
      // Storage.addTask('All', task);
      UI.displayTasks(project);
      addTaskPopup.classList.remove('active');
    });

    cancelTaskButton.addEventListener('click', () => {
      addTaskPopup.classList.remove('active');
      taskName.value = '';
    });
  }

  static displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.textContent = '';
    const toDoList = Storage.getToDoList().getProjects();
    for (let i = 0; i < toDoList.length; i++) {
      const displayedProject = document.createElement('div');
      displayedProject.classList.add('project-name-div');
      displayedProject.innerHTML = `<p class="project-name">
      <img src="../src/assets/project.png" alt="project icon">
      ${toDoList[i].name}</p>
      <img src="../src/assets/delete.png" class="delete-button" alt="delete icon">`;
      projectsList.append(displayedProject);
    }

    UI.handleProjectClick();
    UI.displayProjectPreview();
  }

  static handleProjectClick() {
    const deleteProjectButtons = document.querySelectorAll('.delete-button');

    deleteProjectButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const projectName = button.previousElementSibling.textContent.trim();
        if (button.previousElementSibling.classList.contains('active-project')) {
          UI.clearProjectPreview();
        }
        Storage.deleteProject(projectName);
        UI.displayProjects();
      });
    });
  }

  static handleTaskClick() {
    const taskName = document.querySelectorAll('.task-preview');
    const taskDate = document.querySelectorAll('.task-date');
    const deleteTaskButton = document.querySelectorAll('.delete-task');

    taskName.forEach((taskNameButton) => {
      taskNameButton.addEventListener('click', () => {
        // option to edit task name
      });
    });

    taskDate.forEach((taskDateButton) => {
      taskDateButton.addEventListener('click', () => {
        // option to add or change  task date
      });
    });

    deleteTaskButton.forEach((deleteTaskButton) => {
      deleteTaskButton.addEventListener('click', () => {
        const parent = deleteTaskButton.parentElement.parentElement;
        const taskToDelete = parent.querySelector('.task-preview').textContent;
      });
    });
  }

  static displayProjectPreview() {
    const projectButtons = document.querySelectorAll('.project-name');
    const projectPreview = document.getElementById('project-preview');

    projectButtons.forEach((projectButton) => {
      projectButton.addEventListener('click', () => {
        projectButtons.forEach((projectButton) => projectButton.classList.remove('active-project'));
        const projectName = projectButton.textContent.trim();

        // if (projectName === 'All' || projectName === 'Today'
        // || projectName === 'This Week' || projectName === 'Important')

        if (projectName === 'All') {
          projectPreview.innerHTML = `<h3>${projectName}</h3>
          <div class="tasks-list" id="tasks-list"></div>`;
          UI.displayAllTasks();
          // add 2 more ifs for Today and This Week filters
        } else {
          projectPreview.innerHTML = `
          <h3>${projectName}</h3>
          <div class="tasks-list" id="tasks-list"></div>
          <div class="add-task-popup" id="add-task-popup">
                    <input id="task-name" type="text" class="input-add-task" placeholder="Cool task name"
                    maxlength="25">
                    <div class="popup-project-buttons">
                        <button class="popup-button" id="popup-add-task-button">Add</button>
                        <button class="popup-button" id="popup-cancel-task-button">Cancel</button>
                    </div>
                </div>
          <button class="add-task" id="add-task-button">
              <img src="../src/assets/add-task.png" alt="plus icon">
                  Add Task
          </button>`;
          UI.displayTasks(projectName);
        }

        projectButton.classList.add('active-project');
        UI.handleAddTaskPopup();
      });
    });
  }

  static displayTasks(projectName) {
    const tasksPreview = document.getElementById('tasks-list');
    tasksPreview.textContent = '';

    const currentProject = Storage.getToDoList().getProject(projectName);

    for (let i = 0; i < currentProject.getTasks().length; i++) {
      const task = document.createElement('div');
      task.classList.add('tasks-list-preview');
      task.innerHTML = `
      <div class="task-left-panel">
      <img src="../src/assets/pin.png" class="circle-img" alt="circle icon">
      <p class="task-preview">${currentProject.getTasks()[i].name}</p>
      </div>
      <div class="task-right-panel">
      <p class="task-date">${currentProject.getTasks()[i].dueDate}</p>
      <img src="../src/assets/delete.png" class="delete-task" alt="delete icon">
      </div>
      `;
      tasksPreview.append(task);
    }
    UI.handleTaskClick();
  }

  static displayAllTasks() {
    const tasksPreview = document.getElementById('tasks-list');
    tasksPreview.textContent = '';

    const projects = Storage.getToDoList().getProjects();

    const allTasks = [];
    projects.forEach((project) => project.tasks.forEach((task) => {
      allTasks.push({
        task: task.name,
        project: project.name,
        date: task.dueDate,
      });
    }));

    console.log(allTasks);

    for (let i = 0; i < allTasks.length; i++) {
      const task = document.createElement('div');
      task.classList.add('tasks-list-preview');
      task.innerHTML = `
      <div class="task-left-panel">
      <img src="../src/assets/pin.png" class="circle-img" alt="circle icon">
      <p class="task-preview">${allTasks[i].task} (${allTasks[i].project})</p>
      </div>
      <div class="task-right-panel">
      <p class="task-date">${allTasks[i].date}</p>
      <img src="../src/assets/delete.png" class="delete-task" alt="delete icon">
      </div>
      `;
      tasksPreview.append(task);
    }
  }

  static clearProjectPreview() {
    const projectPreview = document.getElementById('project-preview');
    projectPreview.textContent = '';
  }
}
