import React, { Component } from 'react';

import SignIn from '../SignIn';
import SignUp from '../SignUp';


export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
    }
  }
  render() {
    return (
      <div>
        {this.state.login ? <SignIn /> : <SignUp />}
        <button onClick={() => {this.setState({login: true})}}>Login</button>
        <button onClick={() => {this.setState({login: false})}}>Registre-se</button>
      </div>
    )
  }
}
