import React from 'react'

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',

        backgroundColor: '#C4C4C4',
        minHeight: "80vh",
        // overflow: 'scroll',
        padding: 10

    },
    chipContainer: {
        width: '100%',
        minHeight: '5vh',
        display: 'flex',
        backgroundColor: '#0F0',
        marginBottom: '2vh',
        backgroundColor: '#C4C4C4',


    },
    chipBtn: {
        backgroundColor: '#FFF',
        marginRight: 5
    },
    chipBtnActive: {
        backgroundColor: '#0BAC73',
        color: '#FFF',
        marginRight: 5
    },
    table: {
        minWidth: 650,
        width: '100%',
        height: '100%',

    }
}));

export default useStyles;