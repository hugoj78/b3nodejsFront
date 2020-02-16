import React, { Component } from 'react';
import AuthService from '../services/auth.service';
import GolfService from '../services/golf.service';
import {Table, Button} from 'react-bootstrap'

export class Golf extends Component {

    constructor() {
        super();
        this.state = {
            admin: false,
            golfUser: []
        }

        this.Auth = new AuthService();
        this.Golf = new GolfService();

        const profil = this.Auth.getUserProfil();
        this.state.admin = profil.admin;

        this.Golf.ReadGolf()
            .then(data => {
                console.log(data);
                this.setState({
                    golfUser: data
                })
            })

    }

    CreateGolf() {
        window.location = "/createGolf"
    }


    render() {
        if (this.state.admin) {
            const golf = this.state.golfUser.map((data, key) => (
                <tr key={key}>
                    <td>{data.title}</td>
                    <td>{data.latitude}</td>
                    <td>{data.longitude}</td>
                    <td>{data.description}</td>
                    <td>{data.id_manager}</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
            ));
            return (
                <div>
                    <Table responsive>
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Description</th>
                        <th>ID Manager</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {golf}
                    </tbody>
                    </Table>

                    <Button onClick={this.CreateGolf} className="btn  btn-success" type="submit">Create New golf</Button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>You don't have the rights</p>
                </div>
            );
        }
    }
}

export default Golf;