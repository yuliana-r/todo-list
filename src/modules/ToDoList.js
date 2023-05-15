// import Task from './Task';
import Project from './Project';

export default class ToDoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('All'));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('This week'));
    this.projects.push(new Project('Important'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name)) return;
    this.projects.push(newProject);
  }

  getProject(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.name === projectName);
  }

  deleteProject(projectName) {
    const projectToDelete = this.projects.find((project) => project.name === projectName);
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }
}
