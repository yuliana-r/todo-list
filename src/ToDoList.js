import Task from './Task';
import Project from './Project';

export default class ToDoList {
  constructor() {
    this.projects = [];
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.getName() === newProject.name)) return;
    this.projects.push(newProject);
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  deleteProject(projectName) {
    const projectToDelete = this.projects.find((project) => project.getName() === projectName);
    this.projects = this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }
}
