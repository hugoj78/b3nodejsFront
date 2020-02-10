import React, { Component } from 'react';

export class Home extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Home',
            subtitle: 'Merci WassLaMenace'
        }
    }


    render() {
        return (
            <div>
                <h1> {this.state.title} </h1>
                <p> {this.state.subtitle} </p>

            </div>
        );
    }
}

export default Home;