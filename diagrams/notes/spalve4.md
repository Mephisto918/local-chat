# spalve4

Using Hooks for Programmatic Navigation

You can use hooks like useHistory for navigating programmatically (e.g., after a form submission).

// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const history = useHistory(); // Access the history object for programmatic navigation

  const handleLogin = () => {
    if (username) {
      history.push('/dashboard'); // Navigate to the dashboard route
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Dashboard = () => <h2>Dashboard Page</h2>;

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default App;

Explanation:

    useHistory is a hook used to access the browser’s history and navigate programmatically.
    history.push('/dashboard') navigates to the /dashboard route after the user logs in.