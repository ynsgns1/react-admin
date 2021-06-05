import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TablePagination, Button, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

import { Container, Loading } from '../../components';
import * as Actions from '../../store/actions'
import useStyles from './style'

function Users() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)

    const [selectedTab, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedUserId, setSelectedUserId] = useState(0);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    });
    const [formDataValidate, setFormDataValidate] = useState({
        name: false,
        email: false,
        phoneNumber: false
    });

    useEffect(() => {
        dispatch(Actions.getUsers())
    }, [])


    const selectUser = (id) => () => {
        setSelectedUserId(id)
        setDeleteModalShow(true)
    }
    const removeUser = () => {
        setDeleteModalShow(false)
        dispatch(Actions.deleteUser(selectedUserId))
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangeFormData = (prop) => (e) => {
        setFormDataValidate({
            name: false,
            email: false,
            phoneNumber: false
        })
        setFormData({ ...formData, [prop]: e.target.value })
    }
    const saveForm = () => {
        if (formData.name == "" || formData.email == "" || formData.phoneNumber == "") {
            setFormDataValidate({
                name: formData.name == "",
                email: formData.email == "",
                phoneNumber: formData.phoneNumber == ""
            });
        } else {
            dispatch(Actions.addNewUser({
                "name": formData.name,
                "email": formData.email,
                "phone": formData.phoneNumber
            }))
            setFormData({
                name: "",
                email: "",
                phoneNumber: ""
            })
            setSelectedTab(0)
        }
    }
    return (<div>
        <Container
            title="Kullanıcılar"
            chipData={["Listele", "Yeni Kullanıcı Ekle"]}
            selectedTab={selectedTab}
            setSelectedTab={(index) => setSelectedTab(index)}
        >
            <Loading isLoading={users.loading} />
            {selectedTab == 0 && <><TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table" className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>İsim Soyisim</TableCell>
                            <TableCell align="left">E-mail</TableCell>
                            <TableCell align="left">Doğum Tarihi</TableCell>
                            <TableCell align="right">#</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.data && users.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" className={classes.margin} onClick={selectUser(row.id)}>
                                        <DeleteIcon style={{ color: '#F00' }} fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={(users?.data && users.data.length) ? users.data.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </>}
            {selectedTab == 1 && <Paper style={{ height: '70vh', padding: "20px 10px" }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            id="outlined-basic"
                            label="İsim Soyisim"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChangeFormData("name")}
                            error={formDataValidate.name}
                            helperText={formDataValidate.name == true && "İsim ve soyisim zorunlu."}
                            required

                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            id="outlined-basic"
                            label="E-mail *"
                            variant="outlined"
                            type="email"
                            value={formData.email}
                            onChange={handleChangeFormData("email")}
                            labelWidth={60}
                            error={formDataValidate.email}
                            helperText={formDataValidate.email == true && "E-mail zorunlu."}

                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic"
                            label="Telefon Numarası *"
                            variant="outlined"
                            type="phone"
                            value={formData.phoneNumber}
                            onChange={handleChangeFormData("phoneNumber")}
                            error={formDataValidate.phoneNumber}
                            helperText={formDataValidate.phoneNumber == true && "Telefon numarsı zorunlu."}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" color="primary" onClick={saveForm}>
                            Ekle
                        </Button>
                    </Grid>
                </Grid>
            </Paper>}

            <Dialog
                open={deleteModalShow}
                onClose={() => setDeleteModalShow(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Uyarı"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Silmek istediğinize eminmisiniz?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteModalShow(false)} color="primary">
                        İptal
                    </Button>
                    <Button onClick={removeUser} color="secondary" autoFocus>
                        Sil
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    </div >)

}



export default withRouter(Users);

