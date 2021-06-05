import React from 'react';
import clsx from 'clsx';
import { useTheme, Drawer, List, CssBaseline, Divider, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useHistory } from "react-router-dom";

import { MenuListButton } from '../components'
import useStyles from "./styles";


export default function MiniDrawer({ children }) {
    const classes = useStyles();
    let history = useHistory();

    const [open, setOpen] = React.useState(true);
    const [selectedRote, setSelectedRote] = React.useState(0);
    const [logoutModal, setLogoutModal] = React.useState(false);


    const handleDrawerToogle = () => {
        setOpen(!open);
    };



    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    {open && <h3>Demo Admin</h3>}
                    <IconButton onClick={handleDrawerToogle}>
                        {open ? <ChevronLeftIcon className={classes.iconWhite} /> : <MenuIcon className={classes.iconWhite} />}
                    </IconButton>
                </div>
                {/* <Divider /> */}
                {open && <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', }}>
                    <div className={classes.logoContanier}>
                        <Avatar alt="Remy Sharp" src="/assets/logo.png" className={classes.logo} />
                    </div>
                    <h3>Yunus Güneş</h3>
                </div>}
                <List>
                    <MenuListButton isActive={selectedRote == 0} setSelectedRote={() => setSelectedRote(0)} title="Dashboard" to="/p/Dashboard" key="Dashboard" icon="dashboard" />
                    <MenuListButton isActive={selectedRote == 1} setSelectedRote={() => setSelectedRote(1)} title="Kullanıcılar" to="/p/Users" key="Users" icon="people" />
                </List>
                <Divider />
                <List>
                    <MenuListButton isActive={selectedRote == 2} onClick={() => setLogoutModal(true)} title="Çıkış Yap" key="Login" icon="exit_to_app" />
                </List>
            </Drawer>
            <main className={classes.content}>
                {children}
            </main>

            <Dialog
                open={logoutModal}
                onClose={() => setLogoutModal(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Uyarı"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Çıkış yapmak istediğinize emin misiniz?
             </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setLogoutModal(false)} color="primary">
                        İptal
                    </Button>
                    <Button onClick={() => {
                        history.push("/")
                        setLogoutModal(false)
                    }} color="primary" autoFocus>
                        Çıkış Yap
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}