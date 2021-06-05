import * as keys from '../keys/snackbar';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case keys.SNACKBAR_SHOW:
            return {
                ...state,
                successSnackbarOpen: true,
                successSnackbarMessage: action.payload.message,
                snackbarSeverity: action.payload.severity,
            };
        case keys.SNACKBAR_CLEAR:
            return {
                ...state,
                successSnackbarOpen: false,
                errorSnackbarOpen: false,
                infoSnackbarOpen: false
            };
        default: return { ...state }
    }
}