import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    loginBg: {
        backgroundImage: `url('/assets/bg.jpg')`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',

    },
    loginCard: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'visible',
        padding: 10
    },
    logo: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginTop: -(theme.spacing(6))
    },
    title: {
        textAlign: 'center',
        margin: '10px 0'
    },
    margin: {
        margin: '10px 0',
        width: '80%'
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));
export default useStyles;