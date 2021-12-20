import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import { Box, Button, FormControlLabel, IconButton, InputAdornment, Link, TextField, Typography } from '@material-ui/core';
import { CheckBox, Visibility, VisibilityOff } from '@material-ui/icons';
import { LogoIcon } from '../../../../assets/icons';

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
    const [shouldShowPassword, setShouldShowPassword] = useState<boolean>(false);
    const classes = useStyles();

    return (
    <Box className={classes.container}>
        <LogoIcon className={classes.logo} />
        <Typography variant="subtitle2" className={classes.signIn}>
        Войдите с помощью учётной записи Epic Gamer
        </Typography>
        <form className={classes.form}>
            <TextField classes={{ root: classes.textFieldRoot }} fullWidth={true} variant="outlined" label="Адрес электронной почты" />
            <TextField InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setShouldShowPassword(prevValue => !prevValue)}>
                            {shouldShowPassword ? <Visibility /> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }} type={shouldShowPassword ? "text" : "password" } classes={{ root: classes.textFieldRoot }} fullWidth={true} variant="outlined" label="Пароль" />
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <FormControlLabel label="Запомнить меня" classes={{root: classes.checkboxRoot}} control={<CheckBox />}/>
                    <Link className={classes.link}>
                        <Typography variant='body1'>Забыли пароль</Typography>
                    </Link>
            </Box>
            <Box className={classes.buttonWrapper}>
                <Button fullWidth={true} variant="contained" className={classes.button}>
                    ВОЙТИ ПРЯМО СЕЙЧАС
                </Button>
            </Box>
            <Box className={classes.privacyWrapper}>
                <Link className={classes.link}>
                    <Typography variant='body1'>Политика конфиденциальности</Typography>
                </Link>
            </Box>
            <Box className={classes.signUpWrapper}>
                <Typography variant="body1" className={classes.signUpQuestion}>
                У вас нет учётной записи Epic Games?
                </Typography>
                <Link className={classes.link}>
                    <Typography variant="body1">
                    Зарегистрироваться
                    </Typography>
                </Link>
            </Box>
            <Box className={classes.allOptionsWrapper}>
                <Typography variant="body1">
                    Вернуться ко &nbsp;
                </Typography>
                <Link className={classes.link}>
                    <Typography variant="body1">
                    всем вариантам регистрации
                    </Typography>
                </Link>
            </Box>
        </form>
    </Box>);
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
    },
    logo: {
        color: 'white',
        width: '48px',
        height: '48px',
        marginBottom: '30px'
    },
    signIn:{
        color: 'white',
        fontSize: '13px',
        textAlign: 'left',
        marginTop: '20px',
        width: '100%',
        textTransform: 'uppercase',
    },
    form: {
        maxWidth: '380px',
        widht: '100%',
        marginTop: '20px',
    },
    textFieldRoot: {
        height: '88px',
        color: 'white',
        '& .MuiInputBase-root': {
            color: theme.palette.secondary.light,
        },
        '& label': {
            borderColor: theme.palette.secondary.light,
            color: theme.palette.secondary.light,
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: theme.palette.secondary.light,
        },
        '& .MuiIconButton-root': {
            color: theme.palette.secondary.light,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.secondary.light,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.secondary.light,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.light,
            }
        }
    },
    checkboxRoot: {
        marginLeft: '-5px',
        color: theme.palette.secondary.light,
        '& .MuiCheckbox=root': {
            color: theme.palette.secondary.light,
        },
        '& .MuiFormControlLabel-label': {
            marginLeft: '8px',
        },
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textDecoration: 'underline',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    buttonWrapper: {
        width: '100%',
        maxWidth: '100%',
        marginTop: '30px',
    },
    button: {
        minHeight: '60px',
        color: 'white',
        backgroundColor: '#0074E4',
        '&:hover': {
            backgroundColor: 'rgb(40,138,242)',
        }
    },
    privacyWrapper: {
        marginTop: '36px',
        width: '100%',
        textAlign: 'center',
    },
    signUpWrapper: {
        displat: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
    },
    allOprionsWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: '4px',
    },
    signUpQuestion: {
        displat: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    allOptionsWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4px',
        display: 'flex'
    }
}))

export default LoginForm;