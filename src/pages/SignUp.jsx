import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';


export class SignUp extends Component {

    // constructor() {
    //   super();
    // }
    

    render() {
    return (
        <div> 
            <p> Sign Up</p>
            <SignUpForm/>
        </div>
    );
  }
}

export default SignUp;