import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import { Button } from "react-bootstrap";

export default class Header extends Component {

    constructor() {
        super();

        this.Auth = new AuthService();

        const profil = this.Auth.getUserProfil();
    }
    

    disconnect() {
        this.Auth.disconnectUser()
        window.location = "/"
    }


    render() {
        if (this.profil !== "") {
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
