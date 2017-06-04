import {connect} from 'react-redux'
import React from 'react'
import LoginFrom from './LoginForm'
import {tryLogin as onLoginClick} from '../actions/index'

const Login = connect (
    null,
    {onLoginClick}
)(LoginFrom);

export default Login;