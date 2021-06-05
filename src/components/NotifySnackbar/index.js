import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import * as Actions from '../../store/actions'
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled"   {...props} />;
}
function NotifySnackbar() {
  const dispatch = useDispatch();
  const { successSnackbarMessage, successSnackbarOpen,snackbarSeverity } = useSelector(state => state.snackbar);

  function handleClose() {
    dispatch(Actions.clearSnackbar());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={successSnackbarOpen}
      autoHideDuration={1500}
      onClose={handleClose}
      aria-describedby="client-snackbar"
    >
      <Alert severity={snackbarSeverity}>{successSnackbarMessage}</Alert>
    </Snackbar>
  );
}

export default NotifySnackbar;