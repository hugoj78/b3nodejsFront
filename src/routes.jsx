import React, { Component } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import {Route, withRouter} from 'react-router-dom';
import SignUp from './pages/SignUp';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/account" component={Account}/>
                <Route exact path='/signup' component={SignUp}/>
            </div>
        )
    }
}

export default withRouter(Routes);
