import React from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import { signup } from '../store/actions/authActions'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// injectTapEventPlugin();
class Signup extends React.Component {
    constructor() {
        super();
    }


    signup() {
        var credentials = {
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()
        }
        console.log(credentials.email, credentials.pass)
        this.props.signup(credentials)
    }
    render() {
        return (
            <MuiThemeProvider>
            <div>
                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    ref="email"
                  
                /> <br />
                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    ref="pass"
                />
                {/*<h1>{this.props.user.users.name}</h1>*/}
                <RaisedButton label="Sign Up"
                    onClick={
                        this.signup.bind(this)
                    }
                    primary={true} />
                    {/*{this.props.children}*/}
            </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signup: (credentials) => {
            dispatch(signup(credentials));
        }
    }
}
export default connect(null, mapDispatchToProps)(Signup)
