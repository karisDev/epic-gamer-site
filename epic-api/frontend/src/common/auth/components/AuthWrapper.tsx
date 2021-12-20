import React from "react";
import { Box, makeStyles } from '@material-ui/core';


interface AuthWrapperProps {

}

const AuthWrapper: React.FC<AuthWrapperProps> = ({children}) => {
    const classes = useStyles();
    return (
        <Box className={classes.loginContainer}>
            {children}
        </Box>
    );
}

const useStyles = makeStyles({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        width: '100%',
        height: '100vh',
    }
});

export default AuthWrapper;