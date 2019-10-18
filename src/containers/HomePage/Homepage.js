import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from 'containers/App/App';
import Cdd from 'containers/Cdd/Cdd';

function HomePage() {
return (
    <div>
        <Router>
            <div>
                <Link to="/App">APP</Link>
                <Link to="/App/Cdd">Cdd</Link>
            </div>
        <Switch>
            <Route path="/App" exact component={App} />
            <Route path="/App/Cdd" component={Cdd} />
        </Switch>
        </Router>
    </div>

);
}
export default HomePage;
