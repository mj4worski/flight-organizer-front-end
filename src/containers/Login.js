import {connect} from 'react-redux'
import React from 'react'
import LoginFrom from '../app/LoginForm'
import {canLogin as onLoginClick} from '../actions'

const Login = connect (
    null,
    {onLoginClick}
)(LoginFrom);

export default Login;