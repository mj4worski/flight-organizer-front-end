import './form.scss'
import React from 'react'

const LoginForm = ({onLoginClick}) => {
    let _login, _password;
    const onSubmit = e => {
        e.preventDefault();
        onLoginClick(_login.value, _password.value);
        _login.value = '';
        _password.value = '';
        _login.focus();
        _password.focus();
    };

    return (
        <div>
            <p> Podaj login i aktualne hasło</p>
            <form onSubmit={onSubmit}>
                <p>Login: <input ref={input => _login = input} type="text"/></p>
                <p>Hasło : <input ref={input => _password = input} type="password"/></p>
                <button>Zaloguj</button>
            </form>
        </div>
    )
};

export default LoginForm;