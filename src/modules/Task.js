export default class Task {
  constructor(name, importance, dueDate = 'No Date') {
    this.name = name;
    this.dueDate = dueDate;
    this.importance = false;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setImportance(importance) {
    this.importance = importance;
  }

  getImportance() {
    return this.importance;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }
}
