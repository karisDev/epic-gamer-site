import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles({
    loginContainer: {
        backgroundColor: '#121212',
        widht: '100%',
        height: '100vh',
    }
})

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({}) => {
    const classes = useStyles();
    return (<Container className={classes.loginContainer}>
        <div>Asd</div>
    </Container>);
}

export default Login