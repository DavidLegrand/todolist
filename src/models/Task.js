export const priorities = {
  low: "Basse",
  medium: "Moyenne",
  high: "Haute",
};

export default class TaskModel {
  id;
  createdBy = 1;
  assignedTo = 1;
  constructor(obj = {}) {
    var defaults = {
      id: this.id,
      createdBy: this.createdBy,
      assignedTo: this.assignedTo,
      title: "",
      description: "",
      completed: false,
      created: new Date(),
      deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
      priority: priorities.medium,
    };
    if (obj.created) {
      obj.created = new Date(obj.created);
    }
    if (obj.deadline) {
      obj.deadline = new Date(obj.deadline);
    }
    Object.assign(this, { ...defaults, ...obj });
  }

  getRemaining() {
    return Math.ceil(
      (this.deadline.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
    );
  }

  getStatus() {
    return this.completed ? "Terminée" : this.priority;
  }

  getCompleted() {
    return this.completed ? "Terminée" : "En cours";
  }

  getVariant() {
    switch (true) {
      case this.completed:
        return "light";
      case this.priority === priorities.low:
        return "success";
      case this.priority === priorities.high:
        return "danger";
      case this.priority === priorities.medium:
      default:
        return "warning";
    }
  }
}
