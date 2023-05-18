import Task from './Task';
import Project from './Project';
import ToDoList from './ToDoList';

export default class Storage {
  static saveToDoList(data) {
    localStorage.setItem('toDoList', JSON.stringify(data));
  }

  static getToDoList() {
    const toDoList = Object.assign(
      new ToDoList(),
      JSON.parse(localStorage.getItem('toDoList')),
    );

    Storage.initializeProjects(toDoList);
    Storage.initializeTasks(toDoList);

    return toDoList;
  }

  static initializeProjects(toDoList) {
    toDoList.setProjects(
      toDoList.getProjects().map((project) => Object.assign(new Project(), project)),
    );
  }

  static initializeTasks(toDoList) {
    toDoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task)),
      );
    });
  }

  static updateToDoList(action) {
    const toDoList = Storage.getToDoList();
    action(toDoList);
    Storage.saveToDoList(toDoList);
  }

  static addProject(project) {
    Storage.updateToDoList((toDoList) => {
      toDoList.addProject(project);
    });
  }

  static deleteProject(project) {
    Storage.updateToDoList((toDoList) => {
      toDoList.deleteProject(project);
    });
  }

  static addTask(project, task) {
    Storage.updateToDoList((toDoList) => {
      toDoList.getProject(project).addTask(task);
    });
  }

  static setTaskDate(project, task, date) {
    Storage.updateToDoList((toDoList) => {
      toDoList.getProject(project).getTask(task).setDate(date);
    });
  }

  static deleteTask(project, task) {
    Storage.updateToDoList((toDoList) => {
      toDoList.getProject(project).deleteTask(task);
    });
  }
}
