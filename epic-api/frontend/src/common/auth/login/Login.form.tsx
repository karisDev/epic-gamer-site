import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { Box } from '@material-ui/core';
import { LogoIcon } from '../../../../assets/icons';

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
    const classes = useStyles();
    return (<Box className={classes.container}>
        <LogoIcon className={classes.logo} />
    </Box>);
}

const useStyles = makeStyles({
    container: {
        maxWidth: '470px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '32px',
        background: '#202020',
        padding: '50px 60px',
        flexDirection: 'column',
    },
    logo: {
        color: 'white',
        width: '48px',
        height: '48px',
        marginBottom: '30px',
    }
})

export default LoginForm;