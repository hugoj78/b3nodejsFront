import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import { Button } from "react-bootstrap";

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.disconnect = this.disconnect.bind(this);
        this.Auth = new AuthService();
        
        if(this.Auth.getToken() !== null) {
            const profil = this.Auth.getUserProfil();
        }
    }
    

    disconnect() {
        this.Auth.disconnectUser()
        window.location = "/login"
    }


    render() {
        if (this.Auth.getToken() !== null) {
            return (
                <div>
                    <div className="mb-5">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="/">
                                Home
                            </a>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/account">Account <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/golf">Golf<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/manager">Manager<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li><Button onClick={this.disconnect} block bsSize="large" type="submit">Log Out</Button></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="mb-5">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="/">
                                Home
                            </a>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/signup">Signup <span className="sr-only">(current)</span></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            );
        }
        
    }
}
