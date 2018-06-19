import { Todo, TodoStatus } from '../models/Todo';

export default class TodoService {

  sequence: number = 6;
  todos: Todo[] = [
    {
      id: 1,
      description: 'This has to be done',
      status: TodoStatus.OPEN,
    },
    {
      id: 2,
      description: 'This should be done',
      status: TodoStatus.OPEN,
    },
    {
      id: 3,
      description: 'This is in progress',
      status: TodoStatus.IN_PROGRESS,
    },
    {
      id: 4,
      description: 'This is done',
      status: TodoStatus.CLOSED,
    },
    {
      id: 5,
      description: 'This is done too',
      status: TodoStatus.CLOSED,
    },
  ];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  createTodo(todo: Todo): void {
    this.todos.push(
      Object.assign({}, todo, { id: this.sequence, status: TodoStatus.OPEN }),
    );
    this.sequence += 1;
  }

  updateTodoStatus(todoId: number, status: TodoStatus): void {
    const todo = this.todos.find(todo => todo.id === todoId);
    if (todo) {
      todo.status = status;
    }
  }
}
