import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import RegisterForm from '../src/common/auth/register/Register.form';

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
    registerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        width: '100%',
        height: '100vh',
    }
})

interface RegisterProps {

}
//
const Register: React.FC<RegisterProps> = ({}) => {
    const classes = useStyles();
    return (
    <Container className={classes.registerContainer}>
        <RegisterForm />
    </Container>);
}

export default Register