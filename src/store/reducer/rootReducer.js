import { combineReducers } from 'redux';
import users from './users.reducer';
import snackbar from './snackbar.reducer';


export default combineReducers({
  users,
  snackbar
});
