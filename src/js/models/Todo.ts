export enum TodoStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  CLOSED = 'Closed',
}

export class Todo {

  id: number;
  description: string;
  status: TodoStatus;

  constructor(id: number, description: string, status: TodoStatus) {
    this.id = id;
    this.description = description;
    this.status = status;
  }

}
