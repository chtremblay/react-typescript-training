import { Todo, TodoStatus } from '../models/Todo';

export default class TodoService {

  getAllTodos(): Todo[] {
    return [
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
  }

}
