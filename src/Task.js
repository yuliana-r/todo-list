export default class Task {
  constructor(title, importance, dueDate = 'No Date') {
    this.title = title;
    this.dueDate = dueDate;
    this.importance = importance;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
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
