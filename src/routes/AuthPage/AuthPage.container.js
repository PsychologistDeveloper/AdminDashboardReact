import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { login, register } from 'Store/Admin/Admin.dispatcher';
import AuthPage from './AuthPage.component';

import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from './AuthPage.config';

export const mapStateToProps = (state) => ({
    admin: state.AdminReducer.admin,
    isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = (dispatch) => ({
    login: (loginData) => login(dispatch, loginData),
    register: (registerData) => register(dispatch, registerData),
});

export const AuthPageContainer = (props) => {
    const { login, isLoggedIn, register } = props;

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const onEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);

        // todo: Fix if statement
        // todo: does not set whole email, only matching regex.
        // todo: For example regex match 'test@gmail.c', then this value is setted in state.

        // if (!event.target.value.match(EMAIL_REGEX)) {
        //     console.log(event.target.value);
        //     setEmail(event.target.value);
        //     setEmailError(true);
        // } else {
        //     setEmailError(false);
        // }
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);

        // todo: Fix if statement
        // todo: does not set whole password, only first six char
        // if (event.target.value.length < PASSWORD_MIN_LENGTH) {
        //     setPassword(event.target.value);
        //     setPasswordError(true);
        // } else setPasswordError(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isChecked && !emailError && !passwordError) {
            setIsLoading(true);
            const response = await register({
                name: 'translator',
                email,
                password,
            });
            if (!response) {
                setIsLoading(false);
            }

            return;
        }

        if (!emailError && !passwordError) {
            setIsLoading(true);
            login({
                email,
                password,
            });
        } else {
            alert('Notification component');
        }
    };

    const containerProps = {
        handleSubmit,
        onEmailChange,
        onPasswordChange,
        emailError,
        passwordError,
        isLoading,
        isChecked,
        setIsRegister: setIsRegisterFunc,
    };

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    function setIsRegisterFunc(event) {
        setIsChecked(event.target.checked);
    }

    return (
        <AuthPage
            { ...containerProps }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPageContainer);
