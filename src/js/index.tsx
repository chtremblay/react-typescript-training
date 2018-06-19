import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import TodoBoard from './components/TodoBoard';
import EditTodo from './components/EditTodo';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/todos">Board</Link></li>
        <li><Link to="/todos/new">New todo</Link></li>
      </ul>
      <hr/>
      <Switch>
        <Route strict exact path="/todos" component={TodoBoard} />
        <Route strict exact path="/todos/new" component={EditTodo} />
        <Route strict exact path="/todos/:id" component={EditTodo} />
        <Redirect exact from="/" to="/todos" />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'),
);
