/* eslint-disable no-alert */
import { format, isToday, isThisWeek } from 'date-fns';
import Task from './Task';
import Project from './Project';
import Storage from './Storage';
import pin from '../assets/pin.png';
import addtask from '../assets/add-task.png';
import project from '../assets/project.png';
import deleteButton from '../assets/delete.png';

export default class UI {
  static loadHomepage() {
    UI.initializeHomepage();
    UI.initButtons();
    UI.displayProjects();
    console.log(Storage.getToDoList());
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

  static displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.textContent = '';
    const toDoList = Storage.getToDoList().getProjects();
    for (let i = 0; i < toDoList.length; i++) {
      const displayedProject = document.createElement('div');
      displayedProject.classList.add('project-name-div');
      displayedProject.innerHTML = `<p class="project-name">
      <img src="${project}" alt="project icon">
      ${toDoList[i].name}</p>
      <img src="${deleteButton}" class="delete-button" alt="delete icon">`;
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

  static displayProjectPreview() {
    const projectButtons = document.querySelectorAll('.project-name');
    const projectPreview = document.getElementById('project-preview');

    projectButtons.forEach((projectButton) => {
      projectButton.addEventListener('click', () => {
        projectButtons.forEach((projectButton) => projectButton.classList.remove('active-project'));
        const projectName = projectButton.textContent.trim();

        if (projectName === 'All') {
          projectPreview.innerHTML = `<h3>${projectName}</h3>
          <div class="tasks-list" id="tasks-list"></div>`;
          UI.displayRelevantTasks('all');
        } else if (projectName === 'Today') {
          projectPreview.innerHTML = `<h3>${projectName}</h3>
          <div class="tasks-list" id="tasks-list"></div>`;
          UI.displayRelevantTasks('today');
        } else if (projectName === 'This Week') {
          projectPreview.innerHTML = `<h3>${projectName}</h3>
          <div class="tasks-list" id="tasks-list"></div>`;
          UI.displayRelevantTasks('thisweek');
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
              <img src="${addtask}" alt="plus icon">
                  Add Task
          </button>`;
          UI.displayTasks(projectName);
        }

        projectButton.classList.add('active-project');
        UI.handleAddTaskPopup();
      });
    });
  }

  static handleAddTaskPopup() {
    const addTaskButton = document.getElementById('add-task-button');
    const addButton = document.getElementById('popup-add-task-button');
    const cancelTaskButton = document.getElementById('popup-cancel-task-button');
    const addTaskPopup = document.getElementById('add-task-popup');
    const taskName = document.getElementById('task-name');

    if (addTaskButton) {
      addTaskButton.addEventListener('click', () => {
        taskName.value = '';
        addTaskPopup.classList.add('active');
      });
    }

    if (addButton) {
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
        UI.displayTasks(project);
        addTaskPopup.classList.remove('active');
      });
    }

    if (cancelTaskButton) {
      cancelTaskButton.addEventListener('click', () => {
        addTaskPopup.classList.remove('active');
        taskName.value = '';
      });
    }
  }

  static displayTasks(projectName) {
    const tasksPreview = document.getElementById('tasks-list');
    if (tasksPreview) {
      tasksPreview.textContent = '';
    }

    const currentProject = Storage.getToDoList().getProject(projectName);

    for (let i = 0; i < currentProject.getTasks().length; i++) {
      const task = document.createElement('div');
      task.classList.add('tasks-list-preview');
      task.innerHTML = `
      <div class="task-left-panel">
      <img src="${pin}" class="circle-img" alt="circle icon">
      <p class="task-preview">${currentProject.getTasks()[i].name}</p>
      </div>
      <div class="task-right-panel">
      <p class="task-date">${currentProject.getTasks()[i].dueDate}</p>
      <input type="date" class="input-due-date">
      <img src="${deleteButton}" class="delete-task" alt="delete icon">
      </div>
      `;
      tasksPreview.append(task);
    }
    UI.handleTaskClick();
  }

  static displayRelevantTasks(filter = '') {
    const tasksPreview = document.getElementById('tasks-list');
    tasksPreview.textContent = '';

    const projects = Storage.getToDoList().getProjects();

    const allTasks = [];

    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        const taskDueDate = new Date(task.dueDate);
        let shouldPushTask = false;

        if (filter === 'today' && isToday(taskDueDate)) {
          shouldPushTask = true;
        } else if (filter === 'thisweek' && isThisWeek(taskDueDate, { weekStartsOn: 1 })) {
          shouldPushTask = true;
        } else if (!filter || filter === 'all') {
          shouldPushTask = true;
        }

        if (shouldPushTask) {
          allTasks.push({
            task: task.name,
            project: project.name,
            date: task.dueDate,
          });
        }
      });
    });

    for (let i = 0; i < allTasks.length; i++) {
      const task = document.createElement('div');
      task.classList.add('tasks-list-preview');
      task.innerHTML = `
      <div class="task-left-panel">
        <img src="${pin}" class="circle-img" alt="circle icon">
        <p class="task-preview">${allTasks[i].task} 
        <p class="left-panel-project-name">[${allTasks[i].project}]</p></p>
      </div>
      <div class="task-right-panel">
        <p class="task-date">${allTasks[i].date}</p>
        <input type="date" class="input-due-date">
        <img src="${deleteButton}" class="delete-task" alt="delete icon">
      </div>
      `;
      tasksPreview.append(task);
    }

    UI.handleTaskClick();
  }

  static handleTaskClick() {
    const taskDate = document.querySelectorAll('.task-date');
    const deleteTaskButton = document.querySelectorAll('.delete-task');
    const project = document.querySelector('#project-preview h3').textContent;
    const dueDateInputs = document.querySelectorAll('.input-due-date');

    taskDate.forEach((taskDateButton) => {
      taskDateButton.addEventListener('click', () => {
        UI.openSetDateInput(taskDateButton);
      });
    });

    dueDateInputs.forEach((dueDateInput) => {
      dueDateInput.addEventListener('change', () => {
        UI.setTaskDate(dueDateInput);
      });
    });

    deleteTaskButton.forEach((deleteTaskButton) => {
      deleteTaskButton.addEventListener('click', () => {
        const parent = deleteTaskButton.parentElement.parentElement;
        const taskToDelete = parent.querySelector('.task-preview').textContent;

        if (project === 'All' || project === 'Today' || project === 'This Week') {
          const linkedProject = deleteTaskButton.closest('.tasks-list-preview')
            .querySelector('.left-panel-project-name').textContent.slice(1, -1).trim();
          Storage.deleteTask(linkedProject, taskToDelete.trim());
          UI.displayRelevantTasks('all');
        } else {
          Storage.deleteTask(project, taskToDelete);
          UI.displayTasks(project);
        }
      });
    });
  }

  static setTaskDate(taskDateButton) {
    const taskButton = taskDateButton.parentNode.parentNode;
    const taskName = taskButton.querySelector('.task-preview').textContent.trim();
    const dueDateInput = taskButton.querySelector('.input-due-date');
    const newDueDate = format(new Date(dueDateInput.value), 'dd MMM yyyy');
    const projectName = document.querySelector('#project-preview h3').textContent;
    let linkedProject;

    if (projectName === 'All' || projectName === 'Today' || projectName === 'This Week') {
      linkedProject = taskButton.querySelector('.left-panel-project-name').textContent.slice(1, -1);
      Storage.setTaskDate(linkedProject, taskName, newDueDate);
      UI.displayRelevantTasks(`${projectName.toLowerCase().replace(/\s/g, '')}`);
    } else {
      Storage.setTaskDate(projectName, taskName, newDueDate);
      UI.displayTasks(projectName);
    }
  }

  static openSetDateInput(taskDateButton) {
    const dueDateInput = taskDateButton.nextElementSibling;

    taskDateButton.classList.add('inactive');
    dueDateInput.classList.add('active');
  }

  static initializeHomepage() {
    document.getElementById('allTasks').children[0].classList.add('active-project');
    document.getElementById('project-preview').innerHTML = `<h3>All</h3>
    <div class="tasks-list" id="tasks-list"></div>`;
    UI.displayRelevantTasks('all');
  }

  static clearProjectPreview() {
    const projectPreview = document.getElementById('project-preview');
    projectPreview.textContent = '';
  }
}
