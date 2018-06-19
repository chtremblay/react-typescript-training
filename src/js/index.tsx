import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoService from './services/TodoService';
import TodoBoard from './components/TodoBoard';

const todos = new TodoService().getAllTodos();

ReactDOM.render(<TodoBoard todos={todos} />, document.getElementById('root'));
