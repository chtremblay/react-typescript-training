import * as React from 'react';
import TodoList from './TodoList';
import { Todo, TodoStatus } from '../models/Todo';
import CreateTodo from './CreateTodo';
import TodoService from '../services/TodoService';

interface TodoBoardState {
  todos: Todo[];
}

export default class TodoBoard extends React.Component<{}, TodoBoardState> {

  todoService: TodoService = new TodoService();

  constructor(props: {}) {
    super(props);
    this.state = {
      todos: this.todoService.getAllTodos(),
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <CreateTodo onCreateTodo={todoDescription => this.handleCreateTodo(todoDescription)} />
        <div className="todo-board">
          {this.getTodoLists()}
        </div>
      </div>
    );
  }

  private getTodoLists() {
    return Object.keys(TodoStatus).map((status, index) => (
      <TodoList
        key={index}
        title={TodoStatus[status]}
        todos={this.state.todos.filter(todo => todo.status === TodoStatus[status])}
        onTodoStatusChange={(todoId, newStatus) => this.handleTodoStatusChange(todoId, newStatus)}
      />
    ));
  }

  private handleCreateTodo(todoDescription) {
    this.todoService.createTodo({ description: todoDescription } as Todo);
    this.reloadTodos();
  }

  private reloadTodos() {
    this.setState({
      todos: this.todoService.getAllTodos(),
    });
  }

  private handleTodoStatusChange(todoId: any, newStatus: any) {
    this.todoService.updateTodoStatus(todoId, newStatus);
    this.reloadTodos();
  }
}
