import * as React from 'react';

interface CreateTodoState {
  todoDescription: string;
}

interface CreateTodoProps {
  onCreateTodo: (todoDescription) => void;
}

export default class CreateTodo extends React.Component<CreateTodoProps, CreateTodoState> {

  constructor(props) {
    super(props);
    this.state = {
      todoDescription: '',
    };
  }

  private canSubmit(): boolean {
    return !!this.state.todoDescription;
  }

  private handleCreateTodoFormSubmit(event): void {
    event.preventDefault();
    if (this.canSubmit()) {
      this.props.onCreateTodo(this.state.todoDescription);
      this.setState({ todoDescription: '' });
    }
  }

  render(): React.ReactNode {
    return (
      <div className="create-todo">
        <form className="form" onSubmit={event => this.handleCreateTodoFormSubmit(event)}>
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
            <button type="submit" className="btn">Create</button>
          </div>
        </form>
      </div>
    );
  }

  private handleTodoDescriptionChange(event) {
    this.setState({ todoDescription: event.target.value });
  }
}