import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from 'containers/App/App';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
import Counter from 'containers/Counter/Counter';
import Hook from 'containers/Hooks/hook';
import Grid from 'containers/Grid/Grid';
import style from './HomePage.scss';
import StopWatch from '../StopWacth/StopWatch';


function HomePage() {
    const nothing = {
        pathname: '/App',
        query: {
            ll: 1,
            pp: 2,
        },
        search: '?sort=name'
    };
    const someData = {
        pathname: '/stopWatch',
        state: {
            name: 'ls',
            age: '20'
        }
    };
    return (
        <div>
            <Router>
                <div className={style.nav}>
                    <Link to="/">111</Link>
                    <Link to={nothing}>app</Link>
                    <Link to="/App/Counter/">Counter</Link>
                    <Link to={someData}>StopWatch</Link>
                    <Link to="/hook">hook</Link>
                    <Link to="/Grid">Grid</Link>
                </div>
                {/* switch只会渲染匹配的第一条 */}
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/App" exact component={App} />
                    <Route path="/App/Counter" component={Counter} />
                    <Route path="/StopWatch" component={StopWatch} />
                    <Route path="/hook" component={Hook} />
                    <Route path="/Grid" component={Grid} />
                    {/* 404页面 */}
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>

    );
}
export default HomePage;
