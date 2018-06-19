import * as React from 'react';
import Todo from './Todo';
import { Todo as TodoModel } from '../models/Todo';

interface TodoListProps {
  title: string;
  todos: TodoModel[];
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
    return this.props.todos.map((todo, index) => (
      <Todo key={index} {...todo} />
    ));
  }
}
