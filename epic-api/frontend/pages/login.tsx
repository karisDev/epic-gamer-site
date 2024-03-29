import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import LoginForm from '../src/common/auth/login/Login.form';

/*
        margin: '0',
        padding: '0',
        border: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        width: '100vh',
        height: '100vh',
*/
const useStyles = makeStyles({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        width: '100%',
        height: '100vh',
    }
})

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({}) => {
    const classes = useStyles();
    return (
    <Container className={classes.loginContainer}>
        <LoginForm />
    </Container>);
}

export default Login