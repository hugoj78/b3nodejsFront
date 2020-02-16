import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import ManagerService from '../services/golf.service';
import EditManagerForm from '../components/EditManagerForm'

export class EditGolf extends Component {

    constructor(props) {
        super(props);

        this.state = {
            admin: false,
            id: props.match.params.id
        }

        this.Auth = new AuthService();
        this.Manager = new ManagerService();

        const profil = this.Auth.getUserProfil();
        this.state.admin = profil.admin;
        

    }

    render() {
        if (this.state.admin) {
            return (
                <div>
                    <EditManagerForm id={this.state.id}/>
                </div>
            )
        } else {
            return (
                <div>
                    <p>You don't have the rights</p>
                </div>
            );
        }
    }
}

export default EditManager;