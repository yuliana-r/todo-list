import Task from './Task';
import Project from './Project';
import ToDoList from './ToDoList';

export default class Storage {
  // Retrieving a serialized ToDoList object from the browser's localStorage and converting
  // it back into a fully functional ToDoList object with all its associated projects and tasks

  static saveToDoList(data) {
    localStorage.setItem('toDoList', JSON.stringify(data));
  }

  static getToDoList() {
    const toDoList = Object.assign(
      new ToDoList(),
      JSON.parse(localStorage.getItem('toDoList')),
    );

    toDoList.setProjects(
      toDoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project)),
    );

    toDoList
      .getProjects()
      .forEach((project) => project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task)),
      ));

    return toDoList;
  }

  static addProject(project) {
    const toDoList = Storage.getToDoList();
    toDoList.addProject(project);
    Storage.saveToDoList(toDoList);
  }

  static deleteProject(project) {
    const toDoList = Storage.getToDoList();
    toDoList.deleteProject(project);
    Storage.saveToDoList(toDoList);
  }

  static addTask(project, task) {
    const toDoList = Storage.getToDoList();
    toDoList.getProject(project).addTask(task);
    Storage.saveToDoList(toDoList);
  }
}
