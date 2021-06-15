import React, {Component} from 'react';
import { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import History from '../History/History';

class Nav extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/history'} className="nav-link"> History </Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/history' component={History}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Nav;