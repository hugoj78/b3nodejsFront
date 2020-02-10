import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';


export class Login extends Component {

    constructor() {
      super();
      this.state = {
         title: 'Connectez-vous',
         subtitle: 'Entrer votre mot de passe et identifiant',
         myProducts: [
             {
                 id: 1,
                 name: 'RegisLeBeauGoss',
                 price: 234567890
             },
             {
                 id: 2,
                 name: 'WassLaMenace',
                 price: 9854567565
             },
             {
                 id: 3,
                 name: 'LeibinouLaNounou',
                 price: 6436546756
             }
         ]
      }
    }
    

    render() {
    return (
        <div> 
            <h1> {this.state.title} </h1>
            <p> {this.state.subtitle} </p>

            {/* <div className="productList">
                {this.state.myProducts.map(product => (
                    <div>
                        {product.id} | {product.name} | {product.price}
                    </div>
                ))}
            </div> */}

            <LoginForm/>
        </div>
    );
  }
}

export default Login;