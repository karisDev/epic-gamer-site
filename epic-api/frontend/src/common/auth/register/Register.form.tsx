import React from 'react';
import Box from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface RegisterFromProps {

}

const RegisterForm: React.FC<RegisterFromProps> = ({}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            Hello world
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '470px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '32px',
        backgroundColor: '#202020',
        padding: '50px 60px',
        flexDirection: 'column'
    }
}))

export default RegisterForm;