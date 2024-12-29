# splave3

Nested Routes

You can also nest routes within other routes to create a nested view structure. Here's an example of how to define nested routes:

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <nav>
      <ul>
        <li><Link to="/dashboard/overview">Overview</Link></li>
        <li><Link to="/dashboard/stats">Stats</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/dashboard/overview" component={() => <div>Overview Page</div>} />
      <Route path="/dashboard/stats" component={() => <div>Stats Page</div>} />
    </Switch>
  </div>
);

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default App;

Explanation:

    The Dashboard component has its own nested routes for /dashboard/overview and /dashboard/stats.
    <Switch> ensures only the first matching route renders, even for nested routes.