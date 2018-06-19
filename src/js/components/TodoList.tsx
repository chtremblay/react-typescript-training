import * as React from 'react';
import Todo from './Todo';
import { Todo as TodoModel, TodoStatus } from '../models/Todo';

interface TodoListProps {
  title: string;
  todos: TodoModel[];
  onTodoStatusChange: (todoId: number, newStatus: TodoStatus) => void;
}

export default class TodoList extends React.Component<TodoListProps, any> {

  render() {
    return (
      <section className="todo-list grid__item grid__item--1-3">
        <h1>{this.props.title}</h1>
        {this.getTodos()}
      </section>
    );
  }

  private getTodos() {
    return this.props.todos.map((todo: TodoModel, index) => (
      <Todo
        key={index}
        onStatusChange={(todoId, newStatus) => this.handleTodoStatusChange(todoId, newStatus)}
        {...todo}
      />
    ));
  }

  private handleTodoStatusChange(todoId: number, newStatus: TodoStatus) {
    this.props.onTodoStatusChange(todoId, newStatus);
  }
}
