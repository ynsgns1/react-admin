import React, { useState } from 'react'
import { Avatar, Button, Card, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withRouter } from 'react-router';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import * as Actions from '../../store/actions'

function Login({ history }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [valuesValidate, setValuesValidate] = useState({
        email: false,
        password: false,
    });
    const postLogin = () => {
        if (values.email == "" || values.password == "") {
            setValuesValidate({
                email: values.email == "",
                password: values.password == "",
            })
            dispatch(Actions.showSnackbarMessage("Giriş Başarısız", "error"))

        }
        else {
            dispatch(Actions.showSnackbarMessage("Giriş Başaralı"))
            history.push("/p/Dashboard")
        }
    }

    const handleChange = (prop) => (event) => {
        setValuesValidate({
            email: false,
            password: false,
        })
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="homepage-bgimage" >
            <Card className={classes.loginCard + " login-card"}>
                <Avatar alt="Remy Sharp" src="/assets/logo.png" className={classes.logo} />
                <span className={classes.title}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "</span>
                <TextField
                    className={classes.margin}
                    id="input-with-icon-textfield"
                    variant="outlined"
                    label="Kullanıcı Adı"
                    onChange={handleChange('email')}
                    value={values.email}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle style={{ color: '#2A75B4' }} />
                            </InputAdornment>
                        ),
                    }}
                    error={valuesValidate.email}
                    helperText={valuesValidate.email == true && "Kullanıcı adı hatalı"}
                />

                <TextField
                    className={classes.margin}
                    id="input-with-icon-textfield"
                    variant="outlined"
                    label="Şifre"
                    placeholder="********"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle style={{ color: '#2A75B4' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            < InputAdornment position="end" >
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    error={valuesValidate.password}
                    helperText={valuesValidate.password == true && "Şifre hatalı"}
                />

                <Button variant="contained" color="primary" onClick={postLogin}>
                    Giriş Yap
                </Button>

                <span className={classes.title}>Veya</span>
                <span className={classes.title}>Kaydol</span>

            </Card>
        </div >
    );
}


export default withRouter(Login);
