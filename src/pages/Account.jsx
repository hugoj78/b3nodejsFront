import React, { Component } from 'react';
import AuthService from '../services/auth.service';

export class Home extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Account User',
            user: []
        }

        this.Auth = new AuthService();

        const profil = this.Auth.getUserProfil();
        //console.log(profil);

        // this.Auth.getUserDetail(profil.id)
        //     .then(data => {
        //         console.log(data);
        //         this.setState({
        //             user: data
        //         })
        //     })

    }


    render() {
        if (this.profil !== "") {
            return (
                <div>
                    <h1> {this.state.title} </h1>
                    <p>{this.profil}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>No one</p>
                </div>
            );
        }
    }
}

export default Home;