import * as keys from '../keys/users';

const initialState = {
    data: [],
    isError: false,
    loading: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case keys.GET_USER_DATA_PEDDING:
            return { ...state, loading: true, isError: false }
        case keys.GET_USER_DATA_SUCCESS:
            return { ...state, data: action.payload, isError: false, loading: false }
        case keys.GET_USER_DATA_ERROR:
            return { ...state, isError: true, loading: false }
        case keys.SET_USER_DATA:

            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        ...action.payload,
                        "id": state.data?.length ? state.data.length + 1 : 1
                    }
                ],
                isError: true, loading: false
            }
        case keys.REMOVE_USER:
            return { ...state, data: state.data.filter(x => x.id != action.payload), isError: true, loading: false }
        default: return { ...state }
    }
}