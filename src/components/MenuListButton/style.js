import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
    iconWhite: {
        color: "#FFF"
    },
    btnContainer: {
        //  backgroundColor: '#0BAC73',
        width: '80%',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        marginBottom: 8
    }
}));

export default useStyles;