import * as React from 'react';

interface TodoProps {
  description: string;
}

export default class Todo extends React.Component<TodoProps, any> {

  public render() {
    return (
      <div className="todo">
        <p>{this.props.description}</p>
      </div>
    );
  }

}
