import * as React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component<any, any> {

  private getTodos(number) {
    console.log(number);
    const result = Array(number).fill(0).map((value, index) => {
      return (<Todo key={index} />);
    });
    console.log(result);
    return result;
  }

  public render() {
    return (
      <div className="todoList">
        {this.getTodos(Math.floor(Math.random() * 10))}
      </div>
    );
  }

}
