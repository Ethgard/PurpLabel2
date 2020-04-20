
class Login extends Component {

    componentDidMount() {
        const {checkLoggedUserAction} = this.props;
        checkLoggedUserAction();
    }

    onSuccess = (response) => {
        const {loginSuccessAction} = this.props;
        loginSuccessAction(response && response.profileObj);
    };

    onFailure = (response) => {
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.loginBox}>
                    <Logo className={classes.logo} blue/>
                    <GoogleLogin
                        clientId={GOOGLE_AUTH_CLIENT_ID}
                        render={renderProps => (
                            <button className={classes.loginButton} onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}>
                                <img alt="login" className={classes.googleLogo} src={googleLogo}/>
                                Log in with Google
                            </button>
                        )}
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        );
    };
}