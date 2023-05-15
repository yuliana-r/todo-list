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
}