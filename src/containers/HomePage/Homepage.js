import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from 'containers/App/App';
import Counter from 'containers/Counter/Counter';

const routes = [
    {
      path: '/',
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: '/bubblegum',
      sidebar: () => <div>bubblegum!</div>,
      main: () => <h2>Bubblegum</h2>
    },
    {
      path: '/shoelaces',
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
    }
  ];
function HomePage() {
return (
    <div>
        <Router>
            <div>
                <Link to="/App">APP</Link>
                <Link to="/App/Counter">Counter</Link>
                <Link to="/bubblegum">test</Link>
                <Link to="/shoelaces">shoelaces</Link>
            </div>
        <Switch>
            <Route path="/App" exact component={App} />
            <Route path="/App/Counter" component={Counter} />
            {routes.map((route) => (
                    <Route
                     path={route.path}
                     exact={route.exact}
                    >
                    <route.sidebar />
                    </Route>
            ))}
        </Switch>
        </Router>
    </div>

);
}
export default HomePage;
