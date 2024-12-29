# spash2

Dynamic Routing with Parameters

React Router allows you to define routes with parameters, similar to vue-router. You can use the :param syntax to define dynamic routes.

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';

const User = () => {
  let { userId } = useParams(); // Access the dynamic parameter
  return <h2>User ID: {userId}</h2>;
};

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/user/:userId" component={User} />
      </Switch>
    </Router>
  );
}

export default App;

Explanation:

    /user/:userId defines a dynamic route. The userId is a dynamic parameter.
    useParams() is a hook provided by React Router to access route parameters in your component.