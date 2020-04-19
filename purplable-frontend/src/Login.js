import React from 'react';
import GoogleLogin from 'react-google-login';
// import history from './history';
// import {ROUTES} from "./constants";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: ''
    }
  };

  responseGoogle = (response) => {
    this.setState({fullName: response.profileObj.name});
    this.setState({email: response.profileObj.email});
    console.log(response);

    if (this.state.fullName !== '' && this.state.email !== '') {
      console.log(this.state);
      this.redirectToHomePage();
    }
  };

  redirectToHomePage = () => {
    // history.push(ROUTES.HOME);
  };

  render() {
    return (
      <div>
        <h1>Login with Google</h1>
        <GoogleLogin
          clientId="1084241841567-onhf43a6gptf524488qs3b9k32dk4gi9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>);
  }
}

export default Login;
