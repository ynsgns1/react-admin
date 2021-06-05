import * as keys from '../keys/snackbar';
export const showSnackbarMessage = (message, severity = "success") => {
    return dispatch => {
        dispatch({
            type: keys.SNACKBAR_SHOW,
            payload: {
                message,
                severity
            }
        });
    };
};

export const clearSnackbar = () => {
    return dispatch => {
        dispatch({ type: keys.SNACKBAR_CLEAR });
    };
};