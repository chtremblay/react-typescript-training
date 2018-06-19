import * as React from 'react';
import TodoList from './TodoList';
import { Todo, TodoStatus } from '../models/Todo';

interface TodoBoardProps {
  todos: Todo[];
}

export default class TodoBoard extends React.Component<TodoBoardProps, any> {

  render(): React.ReactNode {
    return (
      <div className="todo-board">
        {this.getTodoLists()}
      </div>
    );
  }

  private getTodoLists() {
    return Object.keys(TodoStatus).map((status, index) => (
      <TodoList
        key={index}
        title={TodoStatus[status]}
        todos={this.props.todos.filter(todo => todo.status === TodoStatus[status])}
      />
    ));
  }

}
