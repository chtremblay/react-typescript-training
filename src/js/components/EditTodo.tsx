import * as React from 'react';
import { Todo } from '../models/Todo';
import TodoService from '../services/TodoService';

interface EditTodoState {
  todoDescription: string;
  todoId?: number;
}

interface EditTodoProps {
  onCreateTodo: (todoDescription) => void;
  history: { push: (path) => void };
  match: { params: { id: string } };
}

export default class EditTodo extends React.Component<EditTodoProps, EditTodoState> {

  todoService = TodoService.getInstance();

  constructor(props) {
    super(props);
    this.state = {
      todoDescription: '',
    };
  }

  private canSubmit(): boolean {
    return !!this.state.todoDescription;
  }

  private handleTodoFormSubmit(event): void {
    event.preventDefault();
    if (this.canSubmit()) {
      if (this.state.todoId) {
        this.todoService.updateTodoDescription(this.state.todoId, this.state.todoDescription);
      }
      this.todoService.createTodo({ description: this.state.todoDescription } as Todo);
      this.props.history.push('/todos');
    }
  }

  componentDidMount() {
    const { id: todoId } = this.props.match.params;
    if (todoId) {
      const todo = this.todoService.getTodoById(parseInt(todoId, 10));
      if (todo) {
        this.setState({
          todoDescription: todo.description,
          todoId: todo.id,
        });
      }
    }
  }

  render(): React.ReactNode {
    return (
      <div className="create-todo">
        <form className="form" onSubmit={event => this.handleTodoFormSubmit(event)}>
          <div className="form__item form__item--input">
            <div className="input">
              <input
                type="text"
                placeholder="New todo description"
                name="todoDescription"
                data-value="taskName"
                value={this.state.todoDescription}
                onChange={event => this.handleTodoDescriptionChange(event)}
              />
            </div>
            <button type="submit" className="btn">Save</button>
          </div>
        </form>
      </div>
    );
  }

  private handleTodoDescriptionChange(event) {
    this.setState({ todoDescription: event.target.value });
  }
}
