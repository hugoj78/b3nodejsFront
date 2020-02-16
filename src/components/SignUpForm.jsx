import React, { Component } from 'react'
import AuthService from '../services/auth.service'

export class SignUpForm extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.email || this.state.email.length === 0 || !this.state.password || this.state.password.length === 0) {
            return;
        }
        this.Auth.SignUp(this.state)
            .then(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('admin', data.body.admin);
                window.location = "/Home"
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Firstname</label>
                        <input
                            type="firstname"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Lastname</label>
                        <input
                            type="lastname"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="connexion" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;