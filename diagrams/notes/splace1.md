# splace1

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} /> {/* Catch-all route */}
      </Switch>
    </Router>
  );
}

export default App;

Explanation:

    <BrowserRouter> (aliased as Router) is the router that handles navigation based on the URL.
    <Link> is used to create navigation links without reloading the page.
    <Route> is used to define which component to render for a specific path.
    <Switch> ensures that only one route is rendered, matching the first route found.