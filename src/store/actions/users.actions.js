import * as keys from '../keys/users';
import { BASE_URL } from '../../settings/env';
import axios from 'axios';
import * as Actions from './index'

export const getUsers = () => dispatch => {
    dispatch({
        type: keys.GET_USER_DATA_PEDDING,
        payload: "",
    });
    axios.get(`${BASE_URL}/users`).then((response => {
        dispatch({
            type: keys.GET_USER_DATA_SUCCESS,
            payload: response.data,
        });
    })).catch((err) => {
        dispatch({
            type: keys.GET_USER_DATA_ERROR,
            payload: false,
        });
    })
}

export const deleteUser = (index) => dispatch => {
    dispatch({
        type: keys.REMOVE_USER,
        payload: index,
    });
}
export const addNewUser = (params) => dispatch => {
    dispatch({
        type: keys.SET_USER_DATA,
        payload: params,
    });
    dispatch(Actions.showSnackbarMessage("Yeni kullanıcı eklendi"))
}