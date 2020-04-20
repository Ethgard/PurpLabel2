import React, {Component} from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios'

export class Logintbygoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    signup(res) {
        const googleresponse = {
            name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            image: res.profileObj.imageUrl,
            providerName: 'Google'
        };
        const headers = {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "X-Requested-With": "XMLHttpRequest"
        }

        axios.post('http://localhost:8080/purplabel/login', googleresponse, {headers: headers})
            .then((result) => {
                let responseJson = result;
                sessionStorage.setItem("userData", JSON.stringify(result));
                console.log(responseJson);
                debugger;
                if (responseJson.data.status === "success") {
                    this.props.history.push('/homepage')
                }
            });
    };

    render() {
        const responseGoogle = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            debugger;
            this.signup(response);
        }
        return (
            <div className="App">
                <div className="row">
                    <div className="col-sm-12 btn btn-info">
                        Login With Google Using ReactJS
                    </div>
                </div>
                <div className="row">
                    <div style={{'paddingTop': "20px"}} className="col-sm-12">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <GoogleLogin
                                clientId="1084241841567-onhf43a6gptf524488qs3b9k32dk4gi9.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}></GoogleLogin>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logintbygoogle