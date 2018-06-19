import * as React from 'react';
import { TodoStatus } from '../models/Todo';

interface TodoProps {
  id: number;
  description: string;
  status: TodoStatus;
  onStatusChange: (todoId: number, newStatus: TodoStatus) => void;
}

export default class Todo extends React.Component<TodoProps, any> {

  public render() {
    return (
      <div className="todo">
        <p>{this.props.description}</p>
        {this.getStatusSelect()}
      </div>
    );
  }

  private getStatusSelect() {
    return (
      <select value={this.props.status} onChange={event => this.handleStatusChange(event)}>
        {Object.keys(TodoStatus).map((status, index) => (
          <option key={index} value={TodoStatus[status]}>{TodoStatus[status]}</option>
        ))}
      </select>
    );
  }

  private handleStatusChange(event) {
    this.props.onStatusChange(this.props.id, event.target.value);
  }
}
