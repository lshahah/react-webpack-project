import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from 'containers/App/App';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
import Counter from 'containers/Counter/Counter';
import style from './HomePage.scss';


function HomePage() {
    return (
        <div>
            <Router>
                <div className={style.nav}>
                    <Link to="/App">APP</Link>
                    <Link to="/App/Counter">Counter</Link>
                    <Link to="/bubblegum">test</Link>
                </div>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/App" exact component={App} />
                    <Route path="/App/Counter" component={Counter} />
                    {/* 404页面 */}
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>

    );
}
export default HomePage;
